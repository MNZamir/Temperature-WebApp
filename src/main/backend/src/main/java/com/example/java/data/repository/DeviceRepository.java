package com.example.java.data.repository;

import com.example.java.data.models.Device;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Optional;

@Repository
@Transactional
public interface DeviceRepository extends JpaRepository<Device, String> {

    @Query(value = "SELECT * FROM Device WHERE Device.uuid = :uuid", nativeQuery = true)
    Device findByUuid(@Param("uuid") String uuid);
}
