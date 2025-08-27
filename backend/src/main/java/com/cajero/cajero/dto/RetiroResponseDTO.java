package com.cajero.cajero.dto;

import java.util.List;
import java.util.Map;

public class RetiroResponseDTO {
    /*Guardar detalle de los billetes entregados*/
    private Map<Integer, Integer> billetesEntregados;
    private int restante;
    /*Lista del dto y se actualiza cada que se termina una transaccion*/
    private List<BilleteDTO> nuevoEstado;
    /*Mensaje para determinar el monto */
    private String mensaje;

    public RetiroResponseDTO(Map<Integer, Integer> billetesEntregados, int restante, List<BilleteDTO> nuevoEstado, String mensaje){
        this.billetesEntregados = billetesEntregados;
        this.restante = restante;
        this.nuevoEstado = nuevoEstado;
        this.mensaje = mensaje;
    }

    public Map<Integer, Integer> getBilletesEntregados(){
        return billetesEntregados;
    }

    public int getRestante(){
        return restante;
    }

    public List<BilleteDTO> getNuevoEstado(){
        return nuevoEstado;
    }
    
    public String getMensaje(){
        return mensaje;
    }
}