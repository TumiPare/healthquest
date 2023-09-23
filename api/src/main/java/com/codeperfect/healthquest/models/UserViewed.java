package com.codeperfect.healthquest.models;

import java.util.Date;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Document("user-viewed")
public class UserViewed {
    
    String username;
    Date date;

}
