package com.example.java.data.models;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "device")
public class Device {

    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private String uuid;

    @ManyToOne
    @JoinColumn(
            nullable = false,
            name = "app_user_id"
    )
    private AppUser appUser;

    public Device(String deviceId, AppUser user) {
        this.uuid = deviceId;
        this.appUser = user;
    }
}
