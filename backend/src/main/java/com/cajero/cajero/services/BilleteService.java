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

    /**
     * Calcula y retorna el saldo total disponible en el cajero.
     * 
     * @return el saldo total en unidades monetarias
     */
    public int obtenerSaldo(){
        return billeteRepository.findAll().stream()
            .mapToInt(billete -> billete.getDenominacion() * billete.getCantidad())
            .sum();
    }
  /**
     * Obtiene un mapa con las denominaciones de billetes disponibles
     * y la cantidad correspondiente de cada una.
     * 
     * @return un mapa donde la clave es la denominación del billete
     *         y el valor es la cantidad disponible
     */
    public Map<Integer, Integer> obtenerBilletesDisponibles(){
        return billeteRepository.findAll().stream()
            .collect(Collectors.toMap(Billete::getDenominacion, Billete::getCantidad));
    }
  
}
