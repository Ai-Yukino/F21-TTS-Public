package com.TTS.myAwesomeProject.controllers;

// import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MainController {
    @RequestMapping("/")
    public String home() {
        return "Hello world!";
    }

    // 🍂Tried to follow instructions here to output JSON
    // https://stackoverflow.com/questions/64735088/how-to-return-json-response-in-springboot🍃
    // @GetMapping("/users")
    // public UserResponse getAllUsers() {
    //     List<User> user = repository.findAll(); // get all users from db
    //
    //     UserResponse userResponse = new UserResponse();
    //
    //     userResponse.setStatus(true);
    //     userResponse.setMessage("Data is found");
    //     userResponse.setData(user);
    //
    //     return userResponse;
    // }
}


