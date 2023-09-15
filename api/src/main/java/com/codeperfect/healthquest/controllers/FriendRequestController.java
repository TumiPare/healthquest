package com.codeperfect.healthquest.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.codeperfect.healthquest.models.FriendRequest;
import com.codeperfect.healthquest.services.FriendRequestService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE })

@RequestMapping("/friend")
public class FriendRequestController {
    
    @Autowired
    FriendRequestService friendRequestService;

    @PostMapping
    public String friendRequestUser(@RequestParam(name = "userA", required = true) String userA, @RequestParam(name = "userB", required = true) String userB) {
        return friendRequestService.friendRequestUser(userA, userB);
    }

    @PostMapping("/accept")
    public String acceptFriendRequest(@RequestBody FriendRequest friendRequest) {
        return friendRequestService.acceptFriendRequest(friendRequest);
    }

    @PostMapping("/decline")
    public String declineFriendRequest(@RequestBody FriendRequest friendRequest) {
        return friendRequestService.declineFriendRequest(friendRequest);
    }

    @GetMapping("/{username}")
    public List<FriendRequest> findFriendRequests(@PathVariable(value = "username") String username) {
        return friendRequestService.findFriendRequests(username);
    }

}
