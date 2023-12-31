package com.codeperfect.healthquest.repositories;

import java.util.List;

import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.aggregation.TypedAggregation;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.codeperfect.healthquest.models.UserAction;

@Repository
public interface UserActionRepository extends MongoRepository<UserAction, String> {
    
    @Query("username: '?0'")
    public List<UserAction> findAllByUsername(String username);

    @Query(value = "{username:'?0'}", sort = "{'timestamp': -1}")
    public List<UserAction> findAllWeight(String username);

}
