package com.prueba.tecnica.controller;


import com.prueba.tecnica.dao.clienteDao;
import com.prueba.tecnica.model.cliente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class clienteController {

    @Autowired
    private clienteDao clienteDaoObject;

    @RequestMapping(value="api/clientes")
    public List<cliente> getCliente(){
        return clienteDaoObject.getClientes();
    }

    @RequestMapping(value = "api/clientes", method = RequestMethod.POST)
    public void registrarCliente(@RequestBody cliente cl){
        clienteDaoObject.registrarCliente(cl);
    }

    @RequestMapping(value = "api/cliente", method = RequestMethod.POST)
    public void actualizarCliente(@RequestBody cliente cl){
        clienteDaoObject.actualizarCliente(cl);
    }

    @RequestMapping(value = "api/cliente", method = RequestMethod.DELETE)
    public void eliminarCliente(@RequestBody cliente cl){
        clienteDaoObject.actualizarCliente(cl);
    }

    @RequestMapping(value = "api/cliente", method = RequestMethod.GET)
        public cliente obtenerCliente(@RequestParam("id") long id){
        return clienteDaoObject.getCliente(id);
    }



}
