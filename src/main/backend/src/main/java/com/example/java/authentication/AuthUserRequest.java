package com.example.java.authentication;

import lombok.*;

@Getter
@Setter
@EqualsAndHashCode
@ToString
@AllArgsConstructor
public class AuthUserRequest {

    private final String username;
    private final String password;
}
