package com.example.java.service;

import java.io.IOException;
import java.io.InputStreamReader;
import java.io.Reader;
import java.util.*;

import com.example.java.data.models.AppUser;
import com.example.java.data.models.Device;
import com.example.java.data.models.FileEntity;
import com.example.java.data.models.TempData;
import com.example.java.data.repository.DeviceRepository;
import com.example.java.data.repository.FileRepository;
import com.example.java.data.repository.TempDataRepository;
import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvValidationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

@Service
public class FileService {

    private final FileRepository fileRepository;
    private final DeviceRepository deviceRepository;
    private final TempDataRepository tempDataRepository;

    @Autowired
    public FileService(
            FileRepository fileRepository,
            DeviceRepository deviceRepository,
            TempDataRepository tempDataRepository
            ) {
        this.fileRepository = fileRepository;
        this.deviceRepository = deviceRepository;
        this.tempDataRepository = tempDataRepository;
    }

    public void save(MultipartFile file, AppUser appUser) throws IOException {
        FileEntity fileEntity = new FileEntity();
        fileEntity.setName(StringUtils.cleanPath(file.getOriginalFilename()));
        fileEntity.setContentType(file.getContentType());
        fileEntity.setData(file.getBytes());
        fileEntity.setSize(file.getSize());
        fileEntity.setAppUser(appUser);

        fileRepository.save(fileEntity);
    }

    public Optional<FileEntity> getFile(String id) {
        return fileRepository.findById(id);
    }

    public List<FileEntity> getAllFiles() {
        return fileRepository.findAll();
    }

    public void getCSVData(MultipartFile file, AppUser user) throws IOException, CsvValidationException {
        Reader reader = new InputStreamReader(file.getInputStream());
        CSVReader csvReader = new CSVReader(reader);
        String[] records;

        while ((records = csvReader.readNext()) != null) {

            ArrayList<String> recordArray = new ArrayList<>(Arrays.asList(records));
            recordArray.removeAll(Collections.singleton(""));
            recordArray.removeAll(Collections.singleton(null));

            this.saveDeviceAndData(recordArray, user);
        }
    }

    public void saveDeviceAndData(ArrayList<String> records, AppUser user) {
        try {
            Device device = new Device(records.get(0), user);
            if (deviceRepository.findByUuid(records.get(0)) == null) {
                System.out.println("device not exist");
                deviceRepository.save(device);
            } else {
                System.out.println("device already exist");
                device = deviceRepository.findByUuid(records.get(0));
            }

            if (records.isEmpty() == false) {
                TempData tempData = new TempData(records, device);
                tempDataRepository.save(tempData);
                System.out.println("Record is not empty");
            } else {
                System.out.println("Record is empty");
            }


        } catch (Exception e) {
            e.printStackTrace();
        }

    }

}