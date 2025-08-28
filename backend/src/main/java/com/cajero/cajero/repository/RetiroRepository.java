package com.cajero.cajero.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cajero.cajero.entity.Retiro;

@Repository
public interface RetiroRepository extends JpaRepository<Retiro, Long> {
}