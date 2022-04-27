package com.example.java.data.models;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;

import static javax.persistence.GenerationType.*;

@Data
@Entity
@Table(name = "temp_record")
public class TempData {

    @Id
    @GeneratedValue
    private Long id;

    private String type;

    @Column(nullable = false)
    private Long epoch;

    @Column(nullable = false)
    private Double temp;

    @ManyToOne
    @JoinColumn(
            nullable = false,
            name = "device_id"
    )
    private Device device;


    public TempData(ArrayList<String> recordArray, Device device) {
        this.type = recordArray.get(1);
        this.epoch = Long.valueOf(String.format("%.0f", Double.parseDouble(recordArray.get(2))));
        this.temp = Double.valueOf(recordArray.get(3));
        this.device = device;
    }
}
