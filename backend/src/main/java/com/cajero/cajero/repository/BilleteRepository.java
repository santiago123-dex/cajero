package com.cajero.cajero.repository;

import com.cajero.cajero.entity.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BilleteRepository extends JpaRepository<Billete, Long> {
}
