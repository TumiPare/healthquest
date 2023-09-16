package com.codeperfect.healthquest.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.codeperfect.healthquest.models.Notification;
import com.codeperfect.healthquest.services.NotificationService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE })

@RequestMapping("/notification")
public class NotificationController {
    
    @Autowired
    NotificationService notificationService;

    @GetMapping("/{username}")
    public List<Notification> findNotifications(@PathVariable(value = "username") String username) {
        return notificationService.findNotifications(username);
    }

}
