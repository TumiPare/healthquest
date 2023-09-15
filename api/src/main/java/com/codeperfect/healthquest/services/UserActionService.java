package com.codeperfect.healthquest.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codeperfect.healthquest.interfaces.Change;
import com.codeperfect.healthquest.interfaces.UserActionUpdates;
import com.codeperfect.healthquest.models.User;
import com.codeperfect.healthquest.models.UserAction;
import com.codeperfect.healthquest.repositories.UserActionRepository;

@Service
public class UserActionService {
    
    @Autowired
    UserActionRepository userActionRepository;

    @Autowired
    UserService userService;

    public List<UserAction> findUserActions(String username) {
        return userActionRepository.findAll(username);
    }

    public UserActionUpdates saveAction(UserAction userAction) {
        
        List<Change> changes = new ArrayList<>();

        User user = userService.findUser(userAction.getUsername());
        
        // Update user stats
        user.setPoints(user.getPoints() + userAction.getValue());
        changes.add(new Change("Congratulations!", "Well done you got some points, keep it up!", userAction.getValue()));

        userService.saveUser(user);

        userActionRepository.save(userAction);

        return new UserActionUpdates(user, changes);
    }
    
}
