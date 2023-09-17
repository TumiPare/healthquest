package com.codeperfect.healthquest.services;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.codeperfect.healthquest.interfaces.Challenge;
import com.codeperfect.healthquest.interfaces.Creature;
import com.codeperfect.healthquest.interfaces.LeaderboardItem;
import com.codeperfect.healthquest.interfaces.Message;
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
            userRepository.save(user);
        }

    }

    public List<LeaderboardItem> retrieveLeaderboard(String username) {

        User user = userRepository.findUserByUsername(username);

        if (user != null) {

            List<LeaderboardItem> leaderboard = new ArrayList<>();
            leaderboard.add(new LeaderboardItem(username + " (You)", user.getProfilePicUrl(), user.getPoints()));
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

    public List<User> retrieveMayknow(String username) {

        List<User> userMayKnow = new ArrayList<>();
        User user = userRepository.findUserByUsername(username);

        if (user != null) {

            List<String> addedUsers = new ArrayList<>();
            for (String friend : user.getFriends()) {
                
                User friendUser = userRepository.findUserByUsername(friend);

                if (friendUser != null) {
                    for (String friendsFriend : friendUser.getFriends()) {

                        if (!user.getUsername().equals(friendsFriend) && !addedUsers.contains(friendsFriend) && !user.containsFriend(friendsFriend)) {
                            addedUsers.add(friendsFriend);
                            userMayKnow.add(userRepository.findUserByUsername(friendsFriend));
                        }

                    }
                }
            }
        }

        return userMayKnow;

    }

    public List<Challenge> retrieveChallenges(String username) {

        User user = userRepository.findUserByUsername(username);

        if (user != null) {
            return user.getChallenges();
        }

        return new ArrayList<>();

    }

    public List<Creature> retrieveCreatures(String username) {

        User user = userRepository.findUserByUsername(username);

        if (user != null) {
            return user.getCreatures();
        }

        return new ArrayList<>();

    }

    public Message addChallenge(String username, Challenge challenge) {

        User user = userRepository.findUserByUsername(username);

        if (user != null && !user.containsChallenge(challenge)) {

            if (!user.containsHarderChallenge(challenge)) {
                
                user.addChallenge(challenge);
                userRepository.save(user);            
                return new Message("success");

            }

            return new Message("valueError");
        }

        return new Message("typeCategoryError");
    }

    @Scheduled(cron = "0 0 0 * * *")
    public void resetUsersDaily() {

        List<User> users = userRepository.findAll();
        for (User user : users) {
            user.resetChallenges("daily");
        }
        
        userRepository.saveAll(users);

    }

    @Scheduled(cron = "5 0 0 * * 1")
    public void resetUsersWeekly() {
        
        List<User> users = userRepository.findAll();
        for (User user : users) {
            user.resetChallenges("weekly");
        }
        
        userRepository.saveAll(users);

    }

    @Scheduled(cron = "10 0 0 1 * *")
    public void resetUsersMonthly() {
        
        List<User> users = userRepository.findAll();
        for (User user : users) {
            user.setPoints(0);
            user.resetChallenges("monthly");
        }
        
        userRepository.saveAll(users);

    }

    @Scheduled(cron = "10 0 0 1 * *")
    public void lowerCreatureHealth() {
        
        List<User> users = userRepository.findAll();
        for (User user : users) {
            user.lowerCreatureHealth();
        }
        
        userRepository.saveAll(users);

    }
}
