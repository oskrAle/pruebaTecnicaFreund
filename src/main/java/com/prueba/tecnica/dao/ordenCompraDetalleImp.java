package com.prueba.tecnica.dao;

import com.prueba.tecnica.model.ordenCompraDetalle;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
@Transactional
public class ordenCompraDetalleImp implements ordenCompraDetalleDao{

    @PersistenceContext
    EntityManager entityManager;

    @Transactional
    @Override
    public List<ordenCompraDetalle> getOrdenesDetalle() {
        String query = "FROM ordenCompraDetalle det JOIN FETCH det.fkOrdenCompra ";
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public void registrarOrdenDetalle(ordenCompraDetalle ord) {
        entityManager.merge(ord);
    }

    @Override
    public void actualizarOrdenDetalle(ordenCompraDetalle ord) {
        entityManager.merge(ord);
    }
}
