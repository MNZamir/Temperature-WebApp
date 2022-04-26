package com.example.java.data.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Getter
@Setter
@Entity
@Table(name = "device")
public class Device {

    @Id
    private String id;
    private String username;

    @
    private AppUser appUser;
}
