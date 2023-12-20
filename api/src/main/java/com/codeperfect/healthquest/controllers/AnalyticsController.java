package com.codeperfect.healthquest.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.codeperfect.healthquest.interfaces.Analytics;
import com.codeperfect.healthquest.services.AnalyticsService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE })

@RequestMapping("/analytics")
public class AnalyticsController {
    
    @Autowired
    AnalyticsService analyticsService;

    @GetMapping()
    public Analytics getAnalytics() {
        return analyticsService.getAnalytics(null);
    }
}
