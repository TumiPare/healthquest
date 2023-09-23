package com.codeperfect.healthquest.interfaces;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserStats {
    
    UserStat steps;
    UserStat water;
    UserStat calories;
    UserStat sleep;

}
