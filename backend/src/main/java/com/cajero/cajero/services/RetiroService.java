package com.cajero.cajero.services;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import com.cajero.cajero.entity.Billete;
import com.cajero.cajero.entity.Retiro;
import com.cajero.cajero.repository.BilleteRepository;
import com.cajero.cajero.repository.RetiroRepository;


@Service
public class RetiroService {
    private final RetiroRepository retiroRepository;
    private final BilleteRepository billeteRepository;
    private final BilleteService billeteService;

    public RetiroService(RetiroRepository retiroRepository, BilleteRepository billeteRepository, BilleteService billeteService) {
        this.retiroRepository = retiroRepository;
        this.billeteRepository = billeteRepository;
        this.billeteService = billeteService;
    }


     /**
     * Realiza el retiro de un monto específico del cajero.
     * Verifica si hay saldo suficiente y distribuye los billetes de mayor a menor denominación.
     * Actualiza la cantidad de billetes en la base de datos y guarda el registro del retiro.
     * 
     * @param monto el valor a retirar
     * @return un mapa donde la clave es la denominación del billete y el valor es la cantidad entregada
     * @throws IllegalArgumentException si el monto es mayor al saldo disponible o no se puede cubrir con los billetes existentes
     */
    public Map<Integer, Integer> retirar(int monto) {
        int saldo = billeteService.obtenerSaldo();

        if (monto > saldo) {
            throw new IllegalArgumentException("El monto a retirar es mayor que el saldo disponible");
        }

        List<Billete> billetes = billeteRepository.findAll();
        billetes.sort((b1, b2) -> b2.getDenominacion() - b1.getDenominacion());

        Map<Integer, Integer> entregados = new java.util.HashMap<>();

        int montoOriginal = monto;

        for (Billete billete : billetes) {
            int denom = billete.getDenominacion();
            int disponibles = billete.getCantidad();

            int necesarios = Math.min(monto / denom, disponibles);

            if (necesarios > 0) {
                entregados.put(denom, necesarios);
                monto -= necesarios * denom;

                billete.setCantidad(disponibles - necesarios);
                billeteRepository.save(billete);
            }

        }

        if (monto > 0) {
              throw new IllegalArgumentException("No se puede retirar con los billetes disponibles.");
        }

        Retiro retiro = new Retiro(montoOriginal, LocalDateTime.now());
        retiroRepository.save(retiro);

        return entregados;
    }
     /**
     * Obtiene el historial de todos los retiros realizados.
     * 
     * @return una lista de objetos Retiro con la información de cada transacción
     */
    @GetMapping
     public List<Retiro> obtenerHistorial() {
        return retiroRepository.findAll();
    }
}