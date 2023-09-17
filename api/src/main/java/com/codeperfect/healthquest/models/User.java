package com.codeperfect.healthquest.models;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.codeperfect.healthquest.interfaces.Challenge;
import com.codeperfect.healthquest.interfaces.Creature;

import lombok.Data;

@Data
@Document("user")
public class User {

    @Id
    String username;

    String profilePicUrl;
    String dob;
    Double weight;
    Double height;
    List<String> friends;
    List<Challenge> challenges;
    List<Creature> creatures;
    Integer points;

    public List<Challenge> getChallengesByCategory(String category) {

        List<Challenge> challengesByCategory = new ArrayList<>();
        for (Challenge challenge : challenges) {
            if (challenge.getCategory().equals(category)) {
                challengesByCategory.add(challenge);
            }
        }

        return challengesByCategory;

    }

    public Creature getCreatureByCategory(String category) {

        for (Creature creature : creatures) {
            if (creature.getCategory().equals(category)) {
                return creature;
            }
        }

        return null;

    }

    public void addFriend(String username) {
        friends.add(username);
    }

    public void addChallenge(Challenge challenge) {
        challenges.add(challenge);
    }

    public void removeFriend(String username) {
        
        for (int i = 0; i < friends.size(); i++) {
            if (friends.get(i).equals(username)) {
                friends.remove(i);
                return;
            }
        }

    }

    public boolean containsFriend(String username) {

        for (String friend : friends) {
            if (friend.equals(username)) {
                return true;
            }
        }
        
        return false;

    }

    public boolean containsChallenge(Challenge challenge) {

        for (Challenge challengeItem : challenges) {
            if (challengeItem.getType().equals(challenge.getType()) && challengeItem.getCategory().equals(challenge.getCategory())) {
                return true;
            }
        }
        
        return false;

    }

    public boolean containsHarderChallenge(Challenge challenge) {

        for (Challenge challengeItem : challenges) {
            if (challengeItem.getCategory().equals(challenge.getCategory())) {
                if (challengeItem.getType().equals("monthly") && 
                (   (challenge.getType().equals("daily") && challenge.getGoal() <= challengeItem.getGoal() / 12) || 
                    (challenge.getType().equals("weekly") && challenge.getGoal() <= challengeItem.getGoal() / 2)
                )) {
                    return true;
                } else if (challengeItem.getType().equals("weekly") && 
                (   (challenge.getType().equals("daily") && challenge.getGoal() <= challengeItem.getGoal() / 3) || 
                    (challenge.getType().equals("monthly") && challenge.getGoal() <= challengeItem.getGoal() * 2)
                )) {
                    return true;
                } else if (challengeItem.getType().equals("daily") && 
                (   (challenge.getType().equals("monthly") && challenge.getGoal() <= challengeItem.getGoal() * 12) || 
                    (challenge.getType().equals("weekly") && challenge.getGoal() <= challengeItem.getGoal() * 3)
                )) {
                    return true;
                }
            }
        }
        
        return false;

    }

    public void resetChallenges(String type) {

        for (Challenge challengeItem : challenges) {
            if (challengeItem.getType().equals(type)) {
                challengeItem.setProgress(0);
            }
        }

    }

}
