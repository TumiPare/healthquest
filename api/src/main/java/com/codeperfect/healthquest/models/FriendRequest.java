package com.codeperfect.healthquest.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document("friend-request")
public class FriendRequest {
    
    @Id
    String id;
    
    String userA;
    String userB;

}
