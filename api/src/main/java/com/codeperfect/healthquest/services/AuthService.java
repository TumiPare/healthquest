package com.codeperfect.healthquest.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codeperfect.healthquest.interfaces.LoginObject;
import com.codeperfect.healthquest.models.User;
import com.codeperfect.healthquest.repositories.UserRepository;

@Service
public class AuthService {
    
    @Autowired
    UserRepository userRepository;

    public User signin(LoginObject loginObject) {
        return userRepository.findByDetails(loginObject.username, loginObject.password);
    }

    public User signup(User user) {
        return userRepository.save(user);
    }

}
