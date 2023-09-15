package com.codeperfect.healthquest.services;

import org.springframework.beans.factory.annotation.Autowired;

import com.codeperfect.healthquest.models.FriendRequest;
import com.codeperfect.healthquest.repositories.FriendRequestRepository;

public class FriendRequestService {
    
    @Autowired
    FriendRequestRepository friendRequestRepository;

    public FriendRequest findFriendRequest(String userA, String userB) {
        return friendRequestRepository.findFriendRequest(userA, userB);
    }

    public void removeFriendRequest(FriendRequest friendRequest) {
        friendRequestRepository.delete(friendRequest);
    }

    public FriendRequest saveFriendRequest(FriendRequest friendRequest) {
        friendRequestRepository.save(friendRequest);
        return friendRequest;
    }

}
