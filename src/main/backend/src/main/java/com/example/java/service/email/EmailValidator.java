package com.example.java.service.email;

import org.springframework.stereotype.Service;

import java.util.function.Predicate;

@Service
public class EmailValidator implements Predicate<String> {

    @Override
    public boolean test(String s) {
//      TODO: Regex for email validation
        return true;
    }
}
