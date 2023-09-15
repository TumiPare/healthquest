package com.codeperfect.healthquest.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.codeperfect.healthquest.models.Notification;

public interface NotificationRepository extends MongoRepository<Notification, String> {
    
    @Query(value = "{username:'?0'}", sort = "{'timestamp': -1}")
    public List<Notification> findAllByUsername(String username);
    
}
