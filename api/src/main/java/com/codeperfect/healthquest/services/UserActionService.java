package com.codeperfect.healthquest.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.aggregation.GroupOperation;
import org.springframework.data.mongodb.core.aggregation.LimitOperation;
import org.springframework.data.mongodb.core.aggregation.MatchOperation;
import org.springframework.data.mongodb.core.aggregation.ProjectionOperation;
import org.springframework.data.mongodb.core.aggregation.SortOperation;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.stereotype.Service;

import com.codeperfect.healthquest.interfaces.Challenge;
import com.codeperfect.healthquest.interfaces.Change;
import com.codeperfect.healthquest.interfaces.Creature;
import com.codeperfect.healthquest.interfaces.UserActionUpdates;
import com.codeperfect.healthquest.interfaces.UserStat;
import com.codeperfect.healthquest.interfaces.UserStats;
import com.codeperfect.healthquest.models.Notification;
import com.codeperfect.healthquest.models.User;
import com.codeperfect.healthquest.models.UserAction;
import com.codeperfect.healthquest.repositories.UserActionRepository;

@Service
public class UserActionService {
    
    @Autowired
    UserActionRepository userActionRepository;

    @Autowired
    UserService userService;

    @Autowired
    NotificationService notificationService;
    
    @Autowired
    private MongoTemplate mongoTemplate;

    public List<UserAction> findUserActions(String username) {
        return userActionRepository.findAllByUsername(username);
    }

    public UserActionUpdates saveAction(UserAction userAction) {
        
        List<Change> changes = new ArrayList<>();

        User user = userService.findUser(userAction.getUsername());
        
        // Update user stats
        int points;
        if (userAction.getCategory().equals("hydration")) {

            points = (int) (userAction.getValue() * 5);
            changes.add(new Change("Congratulations!", "Keep staying hydrated and healthy!", points));

        } else if (userAction.getCategory().equals("steps")) {

            points = (int) (userAction.getValue() * 0.10);
            changes.add(new Change("Congratulations!", "Getting those steps in is amazing!", points));

        } else if (userAction.getCategory().equals("fruit&veg")) {

            points = (int) (userAction.getValue() * 5);
            changes.add(new Change("Congratulations!", "Eating fruit is a great way to get energy and stay healthy!", points));

        } else if (userAction.getCategory().equals("healthyfood")) {

            points = (int) (userAction.getValue() * 30);
            changes.add(new Change("Congratulations!", "Eating a balanced diet is a great way to eat food!", points));

        } else if (userAction.getCategory().equals("sweets")) {

            points = (int) (userAction.getValue() * -5);
            changes.add(new Change("Aw Damn Unlucky!", "Sweets and treats are okay in moderating, but try not to have them!", points));
            
        }  else if (userAction.getCategory().equals("sleep")) {

            points = (int) (userAction.getValue() * 10);
            changes.add(new Change("Congratulations!", "We all need sleep, so make sure you get an decent amount!", points));

        } else if (userAction.getCategory().equals("weight")) {

            user.setWeight(userAction.getValue());
            userService.saveUser(user);

            double newDist = this.calcBMIDistance(user.getHeight(), userAction.getValue());
            if (newDist == 0) {

                points = 25;
                changes.add(new Change("Congratulations!", "Well done on staying healthy!", points));

            } else if (this.calcBMIDistance(user.getHeight(), user.getWeight()) - 0.1 > newDist) {

                points = (int) (65 * newDist);
                changes.add(new Change("Congratulations!", "Keep pushing towards your goals, you've got this!", points));

            } else if (this.calcBMIDistance(user.getHeight(), user.getWeight()) + 0.1 < newDist) {

                points = (int) (-40 * newDist);
                changes.add(new Change("Unlucky!", "Your BMI worsened. Try to stick to your goals, better luck next time!", points));

            } else {
                points = 0;
            }

        } else {

            points = (int) (userAction.getValue() * -20);
            changes.add(new Change("Aw Damn Unlucky!", "Try not to eat too much fast food!", points));

        }

        // Update challenges
        List<Challenge> challenges = user.getChallengesByCategory(userAction.getCategory());
        for (Challenge challenge : challenges) {
            challenge.setProgress(challenge.getProgress() + (int) Math.round(userAction.getValue()));

            if (challenge.getGoal() <= challenge.getProgress()) {

                int challengePoints;
                if (challenge.getType().equals("daily")) {
                    challengePoints = challenge.getGoal() * 2;
                } else if (challenge.getType().equals("weekly")) {
                    challengePoints = challenge.getGoal() * 10;
                } else {
                    challengePoints = challenge.getGoal() * 50;
                }

                points += challengePoints;
                changes.add(new Change("Completed " + challenge.getName() + " Challenge!", "Well done, keep it up!", challengePoints));
                notificationService.saveNotification(new Notification(user.getUsername(), "Completed " + challenge.getName() + " (" + challenge.getType() + ") Challenge!", "challengeCompleted", new Date()));
            
            }
        }

        // Update creatures
        Creature creature = user.getCreatureByCategory(userAction.getCategory());
        if (creature != null) {
            int increase;
            if (creature.getCategory().equals("hydration")) {
                increase = (int) (10 * userAction.getValue());
            } else if (creature.getCategory().equals("food")) {
                increase = (int) (25 * userAction.getValue());
            } else if (creature.getCategory().equals("sleep")) {
                increase = (int) (10 * userAction.getValue());
            } else {
                increase = (int) (0.01 * userAction.getValue());
            }

            creature.setHealth((int) (creature.getHealth() + increase));

            if (creature.getHealth() > 100) {
                creature.setHealth(100);
            }

            if (userAction.getValue() > 0) {
                points += 5;
                changes.add(new Change("Mood Boost!",  creature.getName() + "'s' mood improved!", 5));
            } else if (userAction.getValue() < 0) {
                points += -5;
                changes.add(new Change("Mood Decease",  creature.getName() + "'s didn't like you doing that.", -5));
            }
        }

        user.setPoints(user.getPoints() + points);
        userService.saveUser(user);

        userActionRepository.save(userAction);

        return new UserActionUpdates(user, changes);
    }

    public UserStats getUserStats(String username) {
        return new UserStats(
            getUserStat(username, "steps"), 
            getUserStat(username, "hydration"), 
            new UserStat("food", 2500.0), 
            getUserStat(username, "sleep")
        );
    }

    private UserStat getUserStat(String username, String category) {
        GroupOperation averageValue = Aggregation.group("category", "username").avg("value").as("avgValue");
        MatchOperation filterUserActions = Aggregation.match(new Criteria("username").is(username).and("category").is(category));
        ProjectionOperation projectToMatchModel = Aggregation.project()
            .andExpression("category").as("category")
            .andExpression("avgValue").as("value");

        Aggregation aggregation = Aggregation.newAggregation(filterUserActions, averageValue, projectToMatchModel);

        AggregationResults<UserStat> result = mongoTemplate.aggregate(aggregation, "user-action", UserStat.class);
        
        System.out.println(result.getRawResults());
        return result.getUniqueMappedResult();
    }

    private double calcBMIDistance(double height, double weight) {

        double BMI = weight / (height * height);
        if (BMI >= 18.5 && BMI <= 24.9) {
            return 0;
        } else if (BMI > 24.9) {
            return BMI - 24.9;
        } else {
            return 18.5 - BMI;
        }

    }
    
}
