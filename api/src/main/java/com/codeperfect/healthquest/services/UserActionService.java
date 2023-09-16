package com.codeperfect.healthquest.services;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codeperfect.healthquest.interfaces.Challenge;
import com.codeperfect.healthquest.interfaces.Change;
import com.codeperfect.healthquest.interfaces.Creature;
import com.codeperfect.healthquest.interfaces.UserActionUpdates;
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

    public List<UserAction> findUserActions(String username) {
        return userActionRepository.findAllByUsername(username);
    }

    public UserActionUpdates saveAction(UserAction userAction) {
        
        List<Change> changes = new ArrayList<>();

        User user = userService.findUser(userAction.getUsername());
        
        // Update user stats
        int points;
        if (userAction.getCategory().equals("hydration")) {
            points = userAction.getValue() * 5;
        } else if (userAction.getCategory().equals("steps")) {
            points = (int) (userAction.getValue() * 0.10);
        } else if (userAction.getCategory().equals("fruit&veg")) {
            points = userAction.getValue() * 5;
        } else if (userAction.getCategory().equals("healthyfood")) {
            points = userAction.getValue() * 30;
        } else if (userAction.getCategory().equals("sweets")) {
            points = userAction.getValue() * -5;
        } else {
            points = userAction.getValue() * -20;
        }

        user.setPoints(user.getPoints() + points);

        if (points > 0) {
            changes.add(new Change("Congratulations!", "Well done you got some points, keep it up!", points));
        } else {
            changes.add(new Change("Unlucky", "Try hard to stay to your goals, you can do this!", points));
        }

        // Update challenges
        Challenge challenge = user.getChallengeByCategory(userAction.getCategory());
        if (challenge != null) {
            challenge.setProgress(challenge.getProgress() + points);

            if (challenge.getGoal() >= challenge.getProgress()) {
                int challengePoints;
                if (challenge.getType().equals("daily")) {
                    challengePoints = challenge.getGoal() * 10;
                } else if (challenge.getType().equals("weekly")) {
                    challengePoints = challenge.getGoal() * 50;
                } else {
                    challengePoints = challenge.getGoal() * 150;
                }

                changes.add(new Change("Completed " + challenge.getName() + " Challenge!", "Well done, keep it up!", challengePoints));
                notificationService.saveNotification(new Notification(user.getUsername(), "Completed " + challenge.getName() + " Challenge!", "challengeCompleted", new Date()));
            }
        }

        // Update creatures
        Creature creature = user.getCreatureByCategory(userAction.getCategory());
        if (creature != null) {
            creature.setHealth((int) (creature.getHealth() + userAction.getValue() * 0.2));

            if (userAction.getValue() > 0) {
                changes.add(new Change("Mood Boost!",  creature.getName() + "'s' mood improved!", userAction.getValue()));
            } else if (userAction.getValue() < 0) {
                changes.add(new Change("Mood Decease",  creature.getName() + "'s didn't like you doing that.", userAction.getValue()));
            }
        }

        userService.saveUser(user);

        userActionRepository.save(userAction);

        return new UserActionUpdates(user, changes);
    }
    
}
