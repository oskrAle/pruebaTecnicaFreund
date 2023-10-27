package com.prueba.tecnica.dao;

import com.prueba.tecnica.model.cliente;

import java.util.List;

public interface clienteDao {

    List<cliente> getClientes();

    void registrarCliente(cliente cl);

    void actualizarCliente(cliente cl);

    cliente getCliente(long idCliente);




}
