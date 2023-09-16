package com.codeperfect.healthquest.interfaces;

import lombok.Data;

@Data
public class Challenge {
    
    String name;
    String category;
    Integer goal;
    Integer progress;
    String type;
    String date;

}