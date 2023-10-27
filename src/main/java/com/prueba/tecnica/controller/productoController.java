package com.prueba.tecnica.controller;

import com.prueba.tecnica.dao.productoDao;
import com.prueba.tecnica.model.producto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class productoController {

    @Autowired
    private productoDao productoDaoObject;

    @RequestMapping(value="api/productos")
    public List<producto> getProductos(){
        return productoDaoObject.getProductos();
    }

    @RequestMapping(value = "api/productos", method = RequestMethod.POST)
    public void registrarProducto(@RequestBody producto p){
        productoDaoObject.registrarProducto(p);
    }


    @RequestMapping(value = "api/producto", method = RequestMethod.POST)
    public void actualizarCliente(@RequestBody producto p){
        productoDaoObject.actualizarProducto(p);
    }

    @RequestMapping(value = "api/producto", method = RequestMethod.DELETE)
    public void eliminarCliente(@RequestBody producto p){
        productoDaoObject.actualizarProducto(p);
    }

    @RequestMapping(value = "api/producto", method = RequestMethod.GET)
    public producto obtenerProducto(@RequestParam("id") long id){
        return productoDaoObject.getProducto(id);
    }

}
