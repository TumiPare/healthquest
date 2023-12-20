package com.codeperfect.healthquest.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codeperfect.healthquest.interfaces.AdViewed;
import com.codeperfect.healthquest.repositories.AdRepository;

@Service
public class AdService {
    
    @Autowired
    AdRepository adRepository;

    public AdViewed saveAdViewed(AdViewed adViewed) {
        return adRepository.save(adViewed);
    }

}
