package com.codeperfect.healthquest.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.codeperfect.healthquest.models.UserViewed;

public interface UserViewedRepository extends MongoRepository<UserViewed, String> {}
