package com.codeperfect.healthquest.models;

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
    Float weight;
    Float height;
    List<String> friends;
    List<Challenge> challenges;
    List<Creature> creatures;
    Integer points;

    public Challenge getChallengeByCategory(String category) {

        for (Challenge challenge : challenges) {
            if (challenge.getCategory().equals(category)) {
                return challenge;
            }
        }

        return null;

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

}
