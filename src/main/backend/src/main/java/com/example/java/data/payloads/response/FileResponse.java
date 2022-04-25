package com.example.java.data.payloads.response;

import lombok.Data;
import lombok.Setter;

@Data
public class FileResponse {

    private String id;
    private String name;
    private Long size;
    private String url;
    private String contentType;

    public String getId() {
        return id;
    }

}