package com.cajero.cajero.controllers;

import org.springframework.web.bind.annotation.RestController;

import com.cajero.cajero.entity.Retiro;
import com.cajero.cajero.repository.RetiroRepository;
import com.cajero.cajero.services.RetiroService;

import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.CrossOrigin;


@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5173"})
@RestController
@RequestMapping("/api/retiros")

public class RetiroController {
    private final RetiroService retiroService;
    private final RetiroRepository retiroRepository;

    public RetiroController(RetiroService retiroService, RetiroRepository retiroRepository){
        this.retiroRepository = retiroRepository;
        this.retiroService = retiroService;
    }


    /**
     * Realiza un retiro de dinero por el monto especificado.
     * Distribuye los billetes disponibles y registra la transacción.
     * 
     * @param monto el valor a retirar
     * @return un mapa donde la clave es la denominación del billete y el valor es la cantidad entregada
     */
    @PostMapping("/{monto}")
    public Map<Integer, Integer> retirar (@PathVariable int monto){
        return retiroService.retirar(monto);
    }


    
    /**
     * Obtiene el historial completo de retiros realizados.
     * 
     * @return una lista de objetos Retiro con la información de cada transacción
     */
    @GetMapping
    public List<Retiro> historialRetiros() {
        return retiroRepository.findAll();
    }
    
}
