package com.cajero.cajero.dto;

import java.time.LocalDateTime;


public class RetiroDTO {

    private int monto;
    private LocalDateTime fecha;

    public RetiroDTO(int monto, LocalDateTime fecha){
        this.monto = monto;
        this.fecha = fecha;
    }   

    public int getMonto() {
        return monto;
    }

    public void setMonto(int monto) {
        this.monto = monto;
    }

    public LocalDateTime getFecha() {
        return fecha;
    }

    public void setFecha(LocalDateTime fecha) {
        this.fecha = fecha;
    }

}


