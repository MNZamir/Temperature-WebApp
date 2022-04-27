package com.example.java.data.repository;

import com.example.java.data.models.Device;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Optional;

@Repository
@Transactional
public interface DeviceRepository extends JpaRepository<Device, String> {
}
