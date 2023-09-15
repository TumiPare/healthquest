package com.codeperfect.healthquest.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.codeperfect.healthquest.models.User;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
    
    @Query("{username:'?0'}")
    User findUserByUsername(String username);

}