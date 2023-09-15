package com.codeperfect.healthquest.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.codeperfect.healthquest.models.FriendRequest;

public interface FriendRequestRepository extends MongoRepository<FriendRequest, String> {
    
    @Query("{$or: [ {userA: '?0', userB: '?1'}, {userA: '?1', userB: '?0'} ] }")
    public FriendRequest findFriendRequest(String userA, String userB);

    @Query("{$or: [ {userA: '?0'}, {userB: '?0'} ] }")
    public List<FriendRequest> findFriendRequestsByUsername(String username);

}
