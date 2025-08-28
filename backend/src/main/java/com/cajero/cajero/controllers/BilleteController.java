package com.cajero.cajero.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cajero.cajero.services.BilleteService;

import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;



@RestController
@RequestMapping("/api/billetes")
public class BilleteController {
    private final BilleteService billeteService;

    public BilleteController(BilleteService billeteService) {
        this.billeteService = billeteService;
    }

    @GetMapping("/saldo")
    public int obtenerSaldo(){
        return billeteService.obtenerSaldo();
    }
    
    @GetMapping("/billetes")
    public Map<Integer, Integer> obtenerBilletesDisponibles(){
        return billeteService.obtenerBilletesDisponibles();
    }
    
}
