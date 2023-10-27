package com.prueba.tecnica.dao;

import com.prueba.tecnica.model.ordenCompra;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.util.List;

@Repository
@Transactional
public class ordenCompraDaoImp implements ordenCompraDao{

    @PersistenceContext
    EntityManager entityManager;
    @Override
    @Transactional
    public List<ordenCompra> getOrdenes() {
        TypedQuery<ordenCompra> query = entityManager.createQuery(
                "SELECT o FROM ordenCompra o " +
                        "LEFT JOIN FETCH o.fkCliente c "
                       , ordenCompra.class
        );
        return query.getResultList();
    }

    @Override
    public ordenCompra getOrden(long id) {
        return entityManager.find(ordenCompra.class, id);
    }

    @Override
    public void registrarOrden(ordenCompra odc) {
        entityManager.merge(odc);
    }

    @Override
    public void actualizarOrden(ordenCompra odc) {

    }

    @Override
    public void eliminarOrden(ordenCompra odc) {
        entityManager.remove(odc);
    }

}
