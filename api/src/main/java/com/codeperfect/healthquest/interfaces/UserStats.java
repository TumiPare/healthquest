package com.codeperfect.healthquest.interfaces;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserStats {
    
    UserStat avgSteps;
    UserStat avgWater;
    UserStat avgCalories;
    UserStat avgSleep;

}
