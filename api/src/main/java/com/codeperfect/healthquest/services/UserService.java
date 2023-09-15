package com.codeperfect.healthquest.services;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codeperfect.healthquest.models.FriendRequest;
import com.codeperfect.healthquest.models.Notification;
import com.codeperfect.healthquest.models.User;
import com.codeperfect.healthquest.repositories.UserRepository;

@Service
public class UserService {
    
    @Autowired
    UserRepository userRepository;

    @Autowired
    FriendRequestService friendRequestService;

    @Autowired
    NotificationService notificationService;

    public User findUser(String username) {
        return userRepository.findUserByUsername(username);
    }

    public User saveUser(User user) {
        userRepository.save(user);
        return user;
    }

    public void addFriendToUser(String username, String friendUsername) {
        
        User user = userRepository.findUserByUsername(username);
        if (user != null && userRepository.findUserByUsername(friendUsername) != null) {
            user.addFriend(friendUsername);
        }

    }
}
