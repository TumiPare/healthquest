package com.codeperfect.healthquest.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codeperfect.healthquest.models.User;
import com.codeperfect.healthquest.repositories.UserRepository;

@Service
public class UserService {
    
    @Autowired
    UserRepository userRepository;

    public User findUser(String username) {
        return userRepository.findUserByUsername(username);
    }

    public User saveUser(User user) {
        userRepository.save(user);
        return user;
    }
}
