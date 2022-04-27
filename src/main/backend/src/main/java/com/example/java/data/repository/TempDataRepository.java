package com.example.java.data.repository;

import com.example.java.data.models.TempData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
@Transactional
public interface TempDataRepository extends JpaRepository<TempData, Long> {
}
