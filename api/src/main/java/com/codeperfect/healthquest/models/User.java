package com.codeperfect.healthquest.models;

import java.util.Date;

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

    String name;
    Date dob;
    Float weight;
    Float height;
    Challenge[] challenges;
    Creature[] creatures;
    Integer points;
}
