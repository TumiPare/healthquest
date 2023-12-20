package com.codeperfect.healthquest.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.codeperfect.healthquest.interfaces.TokenObject;
import com.codeperfect.healthquest.models.Token;
import com.codeperfect.healthquest.services.TokenService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE })

@RequestMapping("/token")
public class TokenController {
    
    @Autowired
    TokenService tokenService;

    @PostMapping("/verify")
    public Token verify(@RequestBody TokenObject token) {
        return tokenService.verify(token);
    }
}
