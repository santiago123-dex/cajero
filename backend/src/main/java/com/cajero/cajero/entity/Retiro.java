package com.cajero.cajero.entity;

import java.time.LocalDateTime;

import jakarta.persistence.*;

@Entity
@Table(name = "retiro")
public class Retiro {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "monto")
    private int monto;

    @Column(name = "fecha")
    private LocalDateTime fecha;

    public Retiro(){}
    
    public Retiro(int monto, LocalDateTime fecha){
        this.monto = monto;
        this.fecha = fecha;
    }


    public Long getId() {
        return id;
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
