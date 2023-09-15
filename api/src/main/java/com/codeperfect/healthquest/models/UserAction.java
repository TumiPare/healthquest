package com.codeperfect.healthquest.models;

import java.util.Date;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document("user-action")
public class UserAction {
    
    String username;
    String category;
    Integer value;
    Date timestamp;

}
