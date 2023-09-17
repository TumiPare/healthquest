package com.codeperfect.healthquest.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.codeperfect.healthquest.interfaces.LoginObject;
import com.codeperfect.healthquest.models.User;
import com.codeperfect.healthquest.services.AuthService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE })

@RequestMapping("/auth")
public class AuthController {
    
    @Autowired
    AuthService authService;

    @PostMapping("/signup")
    public User signup(@RequestBody User user) {
        return authService.signup(user);
    }

    @GetMapping("/signin")
    public User signin(@RequestBody LoginObject loginObject) {
        return authService.signin(loginObject);
    }

}
