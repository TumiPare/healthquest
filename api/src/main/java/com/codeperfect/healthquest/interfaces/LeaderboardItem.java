package com.codeperfect.healthquest.interfaces;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class LeaderboardItem implements Comparable<Object> {
    
    public String username;
    public String profilePicUrl;
    public Integer points;

    @Override 
    public int compareTo(Object o) {
        LeaderboardItem f = (LeaderboardItem) o; 
        return f.points - this.points;
    }

}
