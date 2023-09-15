package com.codeperfect.healthquest.services;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codeperfect.healthquest.models.FriendRequest;
import com.codeperfect.healthquest.models.FriendRequestService;
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

    public String friendUser(String username, String friendUsername) {
        
        FriendRequest friedRequest = friendRequestService.findFriendRequest(username, friendUsername);

        // Friend requested by other user
        if (friedRequest != null) {

            friendRequestService.removeFriendRequest(friedRequest);
            
            //Add to first user
            User userA = userRepository.findUserByUsername(username);
            userA.addFriend(friendUsername);
            userRepository.save(userA);

            // Add to second user
            User userB = userRepository.findUserByUsername(friendUsername);
            userB.addFriend(username);
            userRepository.save(userB);
        
            return "Successfully Added Friend";
        }

        friendRequestService.saveFriendRequest(new FriendRequest(username, friendUsername));
        notificationService.saveNotification(new Notification(friendUsername, username + " has requested to be your friend!", "friendReq", new Date()));

        return "Sent Friend Request to " + friendUsername;
    }
}
