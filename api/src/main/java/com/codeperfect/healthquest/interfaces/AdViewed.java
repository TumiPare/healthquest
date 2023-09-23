package com.codeperfect.healthquest.interfaces;

import java.util.Date;

import lombok.Data;

@Data
public class AdViewed {
    
    String username;
    String adId;
    String status;
    Date timestamp;

}
