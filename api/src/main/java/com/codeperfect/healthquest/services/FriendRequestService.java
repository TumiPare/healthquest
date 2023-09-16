package com.codeperfect.healthquest.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codeperfect.healthquest.interfaces.Message;
import com.codeperfect.healthquest.models.FriendRequest;
import com.codeperfect.healthquest.models.User;
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

    public Message friendRequestUser(String username, String friendUsername) {

        User user = userService.findUser(username);

        // Friend already exists on user
        if (user.containsFriend(friendUsername)) {
            return new Message("Already friends with " + friendUsername);
        }

        FriendRequest friendRequest = this.findFriendRequest(username, friendUsername);

        // Friend request already sent by user
        if (friendRequest != null) {
            return new Message("Already sent friend request to " + friendUsername);
        }
        
        friendRequest = this.findFriendRequest(friendUsername, username);

        // Friend request already sent by other user
        if (friendRequest != null) {

            this.acceptFriendRequest(friendRequest);
            return new Message("Successfully added " + friendUsername + "as a friend");

        }

        friendRequest = new FriendRequest();
        friendRequest.setUserA(username);
        friendRequest.setUserB(friendUsername);
        this.saveFriendRequest(friendRequest);

        return new Message("Sent friend request to " + friendUsername);

    }

    public Message acceptFriendRequest(FriendRequest friendRequest) {

        this.removeFriendRequest(friendRequest);
        userService.addFriendToUser(friendRequest.getUserA(), friendRequest.getUserB());
        userService.addFriendToUser(friendRequest.getUserB(), friendRequest.getUserA());

        return new Message("Successfully accepted friend request");

    }

    public Message declineFriendRequest(FriendRequest friendRequest) {
        this.removeFriendRequest(friendRequest);
        return new Message("Successfully declined friend request");
    }

}
