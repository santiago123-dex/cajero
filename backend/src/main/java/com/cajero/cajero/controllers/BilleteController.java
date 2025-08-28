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

    
    /**
     * Obtiene el saldo total disponible en el cajero.
     * 
     * @return el saldo total en unidades monetarias
     */

    @GetMapping("/saldo")
    public int obtenerSaldo(){
        return billeteService.obtenerSaldo();
    }
    
        /**
     * Obtiene un mapa con las denominaciones de billetes disponibles
     * y la cantidad correspondiente de cada una.
     * 
     * @return un mapa donde la clave es la denominación del billete
     *         y el valor es la cantidad disponible
     */
    @GetMapping("/billetes")
    public Map<Integer, Integer> obtenerBilletesDisponibles(){
        return billeteService.obtenerBilletesDisponibles();
    }
    
}
