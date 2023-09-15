package com.codeperfect.healthquest.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.codeperfect.healthquest.models.Notification;

public interface NotificationRepository extends MongoRepository<Notification, String> {
    
    @Query("{username:'?0'}")
    public List<Notification> findAllByUsername(String username);
    
}
