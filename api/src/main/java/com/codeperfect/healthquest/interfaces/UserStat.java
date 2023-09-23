package com.codeperfect.healthquest.interfaces;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserStat {
    
    String username;
    String category;
    Double value;

}
