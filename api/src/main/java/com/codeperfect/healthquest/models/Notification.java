package com.codeperfect.healthquest.models;

import java.sql.Date;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Document("notification")
public class Notification {
    
    String username;
    String body;
    String type;
    Date timestamp;

}
