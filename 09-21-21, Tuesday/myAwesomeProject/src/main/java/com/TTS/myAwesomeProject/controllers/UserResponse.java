package com.TTS.myAwesomeProject.controllers;

import java.util.List;

// 🍂Tried to follow instructions here to output JSON
// https://stackoverflow.com/questions/64735088/how-to-return-json-response-in-springboot🍃
public class UserResponse {
    private Boolean status;
    private String message = "Hewo world";
    private List data;

    public UserResponse() {
    }

    // setters & getters

    public String getMessage() {
        return message;
    }

}


