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
import org.springframework.web.bind.annotation.RestController;

import com.codeperfect.healthquest.interfaces.Challenge;
import com.codeperfect.healthquest.interfaces.Creature;
import com.codeperfect.healthquest.interfaces.LeaderboardItem;
import com.codeperfect.healthquest.models.User;
import com.codeperfect.healthquest.services.UserService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE })

@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping
    public User saveUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    @GetMapping("/{username}")
    public User findUser(@PathVariable(value = "username") String username) {
        return userService.findUser(username);
    }

    @GetMapping("/{username}/leaderboard")
    public List<LeaderboardItem> retrieveLeaderboard(@PathVariable(value = "username") String username) {
        return userService.retrieveLeaderboard(username);
    }

    @GetMapping("/{username}/mayknow")
    public List<User> retrieveMayknow(@PathVariable(value = "username") String username) {
        return userService.retrieveMayknow(username);
    }

    @GetMapping("/{username}/challenges")
    public List<Challenge> retrieveChallenges(@PathVariable(value = "username") String username) {
        return userService.retrieveChallenges(username);
    }

    @GetMapping("/{username}/creatures")
    public List<Creature> retrieveCreatures(@PathVariable(value = "username") String username) {
        return userService.retrieveCreatures(username);
    }

}
