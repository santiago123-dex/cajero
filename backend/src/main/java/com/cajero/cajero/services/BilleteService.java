package com.cajero.cajero.services;

import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.cajero.cajero.entity.Billete;
import com.cajero.cajero.repository.BilleteRepository;

@Service
public class BilleteService {
    private final BilleteRepository billeteRepository;

    public BilleteService(BilleteRepository billeteRepository){
        this.billeteRepository = billeteRepository;
    }

    // funcion que va a retornar el saldo en total que tenemos guardao
    public int obtenerSaldo(){
        return billeteRepository.findAll().stream()
            .mapToInt(billete -> billete.getDenominacion() * billete.getCantidad())
            .sum();
    }

    // Obtener los billetes disponibles
    public Map<Integer, Integer> obtenerBilletesDisponibles(){
        return billeteRepository.findAll().stream()
            .collect(Collectors.toMap(Billete::getDenominacion, Billete::getCantidad));
    }
  
}
