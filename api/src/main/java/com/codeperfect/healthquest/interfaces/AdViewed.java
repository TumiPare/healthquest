package com.codeperfect.healthquest.interfaces;

import java.util.Date;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document("ad")
public class AdViewed {
    
    String username;
    String adId;
    String status;
    Date timestamp;

}
