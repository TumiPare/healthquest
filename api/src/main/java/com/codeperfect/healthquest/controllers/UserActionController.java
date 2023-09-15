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

import com.codeperfect.healthquest.interfaces.UserActionUpdates;
import com.codeperfect.healthquest.models.UserAction;
import com.codeperfect.healthquest.services.UserActionService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE })

@RequestMapping("/action")
public class UserActionController {

    @Autowired
    UserActionService userActionService;

    @GetMapping("/{username}")
    public List<UserAction> findUserActions(@PathVariable(value = "username") String username) {
        return userActionService.findUserActions(username);
    }

    @PostMapping
    public UserActionUpdates saveAction(@RequestBody UserAction action) {
        return userActionService.saveAction(action);
    }
}
