package com.codeperfect.healthquest.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codeperfect.healthquest.models.FriendRequest;
import com.codeperfect.healthquest.repositories.FriendRequestRepository;

@Service
public class FriendRequestService {
    
    @Autowired
    FriendRequestRepository friendRequestRepository;

    @Autowired
    UserService userService;

    public FriendRequest findFriendRequest(String userA, String userB) {
        return friendRequestRepository.findFriendRequest(userA, userB);
    }

    public List<FriendRequest> findFriendRequests(String username) {
        return friendRequestRepository.findFriendRequestsByUsername(username);
    }

    public void removeFriendRequest(FriendRequest friendRequest) {
        friendRequestRepository.delete(friendRequest);
    }

    public FriendRequest saveFriendRequest(FriendRequest friendRequest) {
        friendRequestRepository.save(friendRequest);
        return friendRequest;
    }

    public String friendRequestUser(String username, String friendUsername) {

        FriendRequest friendRequest = this.findFriendRequest(friendUsername, username);

        // Friend request already sent by other user
        if (friendRequest != null) {

            this.acceptFriendRequest(friendRequest);
            return "Successfully added " + friendUsername + "as a friend";

        }

        this.saveFriendRequest(new FriendRequest(username, friendUsername));

        return "Sent friend request to " + friendUsername;

    }

    public String acceptFriendRequest(FriendRequest friendRequest) {

        this.removeFriendRequest(friendRequest);
        userService.addFriendToUser(friendRequest.getUserA(), friendRequest.getUserB());
        userService.addFriendToUser(friendRequest.getUserB(), friendRequest.getUserA());

        return "Successfully accepted friend request";

    }

    public String declineFriendRequest(FriendRequest friendRequest) {
        this.removeFriendRequest(friendRequest);
        return "Successfully declined friend request";
    }

}
