package com.example.java.controller;

import java.util.*;
import java.util.stream.Collectors;

import com.example.java.data.models.AppUser;
import com.example.java.data.models.FileEntity;
import com.example.java.data.payloads.response.FileResponse;
import com.example.java.data.repository.AppUserRepository;
import com.example.java.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@RequestMapping("/api/v1/files")
@CrossOrigin
public class FilesController {

    private final FileService fileService;

    private final AppUserRepository appUserRepository;

    @Autowired
    public FilesController(FileService fileService, AppUserRepository appUserRepository) {
        this.fileService = fileService;
        this.appUserRepository = appUserRepository;
    }

    @PostMapping
    public ResponseEntity<String> upload(@RequestParam("file") MultipartFile file) {
        String email = "zamiramiludin@gmail.com";
        try {
            AppUser userObject = appUserRepository.findByEmail(email).get();

            fileService.getCSVData(file, userObject);
            fileService.save(file, userObject);
            return ResponseEntity.status(HttpStatus.OK)
                    .body(String.format("File uploaded successfully: %s", file.getOriginalFilename()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(String.format("Could not upload the file: %s!", file.getOriginalFilename()));
        }
    }

    @GetMapping
    public List<FileResponse> list() {
        return fileService.getAllFiles()
                .stream()
                .map(this::mapToFileResponse)
                .collect(Collectors.toList());
    }

    private FileResponse mapToFileResponse(FileEntity fileEntity) {
        String downloadURL = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/files/")
                .path(fileEntity.getId())
                .toUriString();
        FileResponse fileResponse = new FileResponse();
        fileResponse.setId(fileEntity.getId());
        fileResponse.setName(fileEntity.getName());
        fileResponse.setContentType(fileEntity.getContentType());
        fileResponse.setSize(fileEntity.getSize());
        fileResponse.setUrl(downloadURL);

        return fileResponse;
    }

    @GetMapping("{id}")
    public ResponseEntity<byte[]> getFile(@PathVariable String id) {
        Optional<FileEntity> fileEntityOptional = fileService.getFile(id);

        if (!fileEntityOptional.isPresent()) {
            return ResponseEntity.notFound()
                    .build();
        }

        FileEntity fileEntity = fileEntityOptional.get();
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + fileEntity.getName() + "\"")
                .contentType(MediaType.valueOf(fileEntity.getContentType()))
                .body(fileEntity.getData());
    }

}