package com.prueba.tecnica.dao;

import com.prueba.tecnica.model.producto;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
@Transactional
public class productoDaoImp implements productoDao{


    @PersistenceContext
    EntityManager entityManager;

    @Transactional
    @Override
    public List<producto> getProductos() {
        String query = "FROM producto p WHERE Estado = 'A' ";
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public void registrarProducto(producto pr) {
        entityManager.merge(pr);
    }

    @Override
    public void actualizarProducto(producto pr) {
        entityManager.merge(pr);
    }

    @Override
    public producto getProducto(long idProducto) {
        return entityManager.find(producto.class, idProducto);
    }


}
