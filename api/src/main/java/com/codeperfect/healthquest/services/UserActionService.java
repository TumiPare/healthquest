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
        user.setPoints(user.getPoints() + userAction.getValue());

        if (userAction.getValue() > 0) {
            changes.add(new Change("Congratulations!", "Well done you got some points, keep it up!", userAction.getValue()));
        } else if (userAction.getValue() < 0) {
            changes.add(new Change("Unlucky", "Try hard to stay to your goals, you can do this!", userAction.getValue()));
        }

        // Update challenges
        Challenge challenge = user.getChallengeByCategory(userAction.getCategory());
        if (challenge != null) {
            challenge.setProgress(challenge.getProgress() + userAction.getValue());

            if (challenge.getGoal() >= challenge.getProgress() && challenge.getDateCompleted() == null) {
                
                SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
                challenge.setDateCompleted(formatter.format(new Date()));

                changes.add(new Change("Completed " + challenge.getName() + " Challenge!", "Well done, keep it up!", 100));
                notificationService.saveNotification(new Notification(user.getUsername(), "Completed " + challenge.getName() + " Challenge! Well done, keep it up!", "challengeCompleted", new Date()));
            
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
