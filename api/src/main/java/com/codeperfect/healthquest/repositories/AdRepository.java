package com.codeperfect.healthquest.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.codeperfect.healthquest.interfaces.AdViewed;

public interface AdRepository extends MongoRepository<AdViewed, String> {}
