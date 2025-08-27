package com.cajero.cajero.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "billete")
public class Billete {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name  = "denominacion")
    private int denominacion;

    @Column(name  = "cantidad")
    private int cantidad;

    public Billete(int denominacion, int cantidad){
        this.denominacion = denominacion;
        this.cantidad = cantidad;
    }

    public Long getId(){
        return id;
    }

    public int getDenominacion(){
        return denominacion;
    }
    
    public void setDenominacion(int denominacion){
        this.denominacion = denominacion;
    }

    public int getCantidad(){
        return cantidad;
    }

    public void setCantidad(int cantidad){
        this.cantidad = cantidad;
    }


}
