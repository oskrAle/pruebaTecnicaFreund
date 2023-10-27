package com.prueba.tecnica.dao;

import com.prueba.tecnica.model.ordenCompra;

import java.util.List;

public interface ordenCompraDao {

    List<ordenCompra> getOrdenes();

    ordenCompra getOrden(long id);

    void registrarOrden(ordenCompra odc);

    void actualizarOrden(ordenCompra odc);

    void eliminarOrden(ordenCompra id);
}
