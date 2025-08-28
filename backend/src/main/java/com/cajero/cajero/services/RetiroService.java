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
    // el final sirve para que despues de inizializar no se puede cambiar de objeto
    private final RetiroRepository retiroRepository;
    private final BilleteRepository billeteRepository;
    private final BilleteService billeteService;

    public RetiroService(RetiroRepository retiroRepository, BilleteRepository billeteRepository, BilleteService billeteService) {
        this.retiroRepository = retiroRepository;
        this.billeteRepository = billeteRepository;
        this.billeteService = billeteService;
    }

    public Map<Integer, Integer> retirar(int monto) {
        int saldo = billeteService.obtenerSaldo();

        if (monto > saldo) {
            throw new IllegalArgumentException("El monto a retirar es mayor que el saldo disponible");
        }

        // ordenar billetes de mayor a menor
        List<Billete> billetes = billeteRepository.findAll();
        billetes.sort((b1, b2) -> b2.getDenominacion() - b1.getDenominacion());

        // Mantener el orden en que se retira
        Map<Integer, Integer> entregados = new java.util.HashMap<>();

        // guardado de monto original
        int montoOriginal = monto;

        for (Billete billete : billetes) {
            int denom = billete.getDenominacion();
            int disponibles = billete.getCantidad();

            // calcular cuanto billetes se necesitan para cubrir el monto
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

        // Guardar el retiro en la base de datos con el monto real retirado
        Retiro retiro = new Retiro(montoOriginal, LocalDateTime.now());
        retiroRepository.save(retiro);

        return entregados;
    }
    //endpoint del historial
    @GetMapping
     public List<Retiro> obtenerHistorial() {
        return retiroRepository.findAll();
    }
}