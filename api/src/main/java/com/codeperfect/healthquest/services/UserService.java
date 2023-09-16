package com.codeperfect.healthquest.services;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codeperfect.healthquest.interfaces.LeaderboardItem;
import com.codeperfect.healthquest.models.User;
import com.codeperfect.healthquest.repositories.UserRepository;

@Service
public class UserService {
    
    @Autowired
    UserRepository userRepository;

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

    public List<LeaderboardItem> retrieveLeaderboard(String username) {

        User user = userRepository.findUserByUsername(username);

        if (user != null) {

            List<LeaderboardItem> leaderboard = new ArrayList<>();
            leaderboard.add(new LeaderboardItem(username, user.getProfilePicUrl(), user.getPoints()));
            for (String friendUsername : user.getFriends()) {
                
                User friend = userRepository.findUserByUsername(friendUsername);
                if (friend != null) {
                    LeaderboardItem friendStats = new LeaderboardItem(friendUsername, friend.getProfilePicUrl(), friend.getPoints());
                    leaderboard.add(friendStats);
                }

            }

            Collections.sort(leaderboard);
            return leaderboard;

        }

        return new ArrayList<>();
    }
}
