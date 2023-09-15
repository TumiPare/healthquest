package com.codeperfect.healthquest.interfaces;

import java.util.List;

import com.codeperfect.healthquest.models.User;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserActionUpdates {
    
    User updatedUser;
    List<Change>  changes;

}
