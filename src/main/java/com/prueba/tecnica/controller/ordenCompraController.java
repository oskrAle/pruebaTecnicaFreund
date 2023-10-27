package com.prueba.tecnica.controller;

import com.prueba.tecnica.dao.clienteDao;
import com.prueba.tecnica.dao.ordenCompraDao;
import com.prueba.tecnica.dao.ordenCompraDetalleDao;
import com.prueba.tecnica.dao.productoDao;
import com.prueba.tecnica.model.cliente;
import com.prueba.tecnica.model.ordenCompra;
import com.prueba.tecnica.model.ordenCompraDetalle;
import com.prueba.tecnica.model.producto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ordenCompraController {

    @Autowired
    private ordenCompraDao ordenCompraDaoObject;

    @Autowired
    private clienteDao clienteDaoObject;

    @Autowired
    private ordenCompraDetalleDao ordenCompraDetalleDaoObject;

    @Autowired
    private productoDao productoDaoObject;

    @RequestMapping(value="api/ordenes")
    public List<ordenCompra> getOrdenes(){
        return ordenCompraDaoObject.getOrdenes();
    }

    @RequestMapping(value = "api/ordenes", method = RequestMethod.POST)
    public void registrarOrden(@RequestBody ordenCompra or){

        cliente cl = clienteDaoObject.getCliente(or.getFkCliente().getIdCatCliente());
        producto pr = null;

        or.setFkCliente(cl);

        for(ordenCompraDetalle det : or.getOrdenCompraDet()){
            System.out.println(det.getFkProducto().getIdCatProducto());
            pr = productoDaoObject.getProducto(det.getFkProducto().getIdCatProducto());
            det.setFkProducto(pr);
            det.setFkOrdenCompra(or);
        }

        //or.setOrdenCompraDet(listaDetalleOrden);

        ordenCompraDaoObject.registrarOrden(or);

    }

    @RequestMapping(value = "api/ordenes", method = RequestMethod.DELETE)
    public void eliminarOrden(@RequestParam("id") long idOrden){
        ordenCompra or = ordenCompraDaoObject.getOrden(idOrden);
        ordenCompraDaoObject.eliminarOrden(or);
    }
}
