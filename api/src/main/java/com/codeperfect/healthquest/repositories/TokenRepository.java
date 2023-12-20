package com.codeperfect.healthquest.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.codeperfect.healthquest.models.Token;

@Repository
public interface TokenRepository extends MongoRepository<Token, String> {
    
    @Query("{token:'?0'}")
    Token findToken(String token);

}