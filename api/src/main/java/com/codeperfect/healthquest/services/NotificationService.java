package com.codeperfect.healthquest.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codeperfect.healthquest.models.Notification;
import com.codeperfect.healthquest.repositories.NotificationRepository;

@Service
public class NotificationService {
    
    @Autowired
    NotificationRepository notificationRepository;

    public Notification saveNotification(Notification notification) {
        notificationRepository.save(notification);
        return notification;
    }

    public List<Notification> findNotifications(String username) {
        return notificationRepository.findAllByUsername(username);
    }

}
