package com.prueba.tecnica.dao;

import com.prueba.tecnica.model.cliente;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
@Transactional
public class clienteDaoImp implements clienteDao{

    @PersistenceContext
    EntityManager entityManager;
    @Override
    @Transactional
    public List<cliente> getClientes() {
        String query = "FROM cliente WHERE estadoCliente = 'A' ";
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public void registrarCliente(cliente cl) {
        entityManager.merge(cl);
    }

    @Override
    public void actualizarCliente(cliente cl) {
        entityManager.merge(cl);
    }

    @Override
    public cliente getCliente(long idCliente) {
        return entityManager.find(cliente.class, idCliente);
    }
}
