package com.cajero.cajero.services;

import org.springframework.stereotype.Service;

import com.cajero.cajero.repository.BilleteRepository;

@Service
public class CajeroService {
    private final BilleteRepository billeteRepository;

    public CajeroService(BilleteRepository billeteRepository){
        this.billeteRepository = billeteRepository;
    }
}
