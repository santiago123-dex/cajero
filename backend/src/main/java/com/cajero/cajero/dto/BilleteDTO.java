package com.cajero.cajero.dto;

public class BilleteDTO {
    private int denominacion;
    private int cantidad;

    public BilleteDTO(int denominacion, int cantidad) {
        this.denominacion = denominacion;
        this.cantidad = cantidad;
    }

    public int getDenominacion() {
        return denominacion;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setDenominacion(int denominacion) {
        this.denominacion = denominacion;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }
}
