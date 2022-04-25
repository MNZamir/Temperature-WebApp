package com.example.java.controller;

import com.example.java.data.models.AppUser;
import com.example.java.service.AppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/user")
@CrossOrigin
public class UserController {

    @Autowired
    AppUserService appUserService;

    @GetMapping(path = "all")
    public ResponseEntity<List<AppUser>> getAllUsers() {
        List<AppUser> users = appUserService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping(path = "{email}")
    public UserDetails getUserEmail(@PathVariable("email") String email) {
        return appUserService.loadUserByUsername(email);
    }
}
