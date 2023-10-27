package com.prueba.tecnica.controller;

import com.prueba.tecnica.dao.ordenCompraDetalleDao;
import com.prueba.tecnica.model.ordenCompraDetalle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ordenCompraDetalleController {

    @Autowired
    private ordenCompraDetalleDao ordenCompraDetalleDaoObject;

    @RequestMapping(value="api/detallesordenes")
    public List<ordenCompraDetalle> getOrdenesCompraDetalle(){
        return ordenCompraDetalleDaoObject.getOrdenesDetalle();
    }
}
