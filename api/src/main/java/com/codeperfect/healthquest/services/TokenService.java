package com.codeperfect.healthquest.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codeperfect.healthquest.interfaces.TokenObject;
import com.codeperfect.healthquest.models.Token;
import com.codeperfect.healthquest.repositories.TokenRepository;

@Service
public class TokenService {
    
    @Autowired
    TokenRepository tokenRepository;

    public Token verify(TokenObject tokenObject) {
        return tokenRepository.findToken(tokenObject.token);
    }

}
