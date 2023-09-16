package com.codeperfect.healthquest.models;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Document("friend-request")
public class FriendRequest {
    
    String userA;
    String userB;
    
}
