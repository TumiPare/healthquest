package com.codeperfect.healthquest.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.codeperfect.healthquest.interfaces.AdViewed;
import com.codeperfect.healthquest.services.AdService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE })

@RequestMapping("/ad")
public class AdController {
    
    @Autowired
    AdService adService;

    @PostMapping()
    public AdViewed saveAdViewed(@RequestBody AdViewed adViewed) {
        return adService.saveAdViewed(adViewed);
    }

}
