package com.prueba.tecnica.dao;

import com.prueba.tecnica.model.cliente;
import com.prueba.tecnica.model.producto;

import java.util.List;

public interface productoDao {

    List<producto> getProductos();

    void registrarProducto(producto pr);

    void actualizarProducto(producto pr);

    producto getProducto(long id);

}
