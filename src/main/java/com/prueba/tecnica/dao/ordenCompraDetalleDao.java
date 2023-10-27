package com.prueba.tecnica.dao;

import com.prueba.tecnica.model.ordenCompraDetalle;

import java.util.List;

public interface ordenCompraDetalleDao {

    List<ordenCompraDetalle> getOrdenesDetalle();

    void registrarOrdenDetalle(ordenCompraDetalle ord);

    void actualizarOrdenDetalle(ordenCompraDetalle ord);
}
