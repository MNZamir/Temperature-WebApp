package com.example.java.data.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "device")
public class Device {

    @Id
    private String id;

    @ManyToOne
    @JoinColumn(
            nullable = false,
            name = "app_user_id"
    )
    private AppUser appUser;

    public Device(String id, AppUser user) {
        this.id = id;
        this.appUser = user;
    }
}
