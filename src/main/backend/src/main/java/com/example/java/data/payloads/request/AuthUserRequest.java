package com.example.java.data.payloads.request;

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
