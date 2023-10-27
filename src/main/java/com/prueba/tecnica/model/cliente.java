    package com.prueba.tecnica.model;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "cat_cliente")
@ToString
@EqualsAndHashCode
public class cliente {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Getter @Setter @Column(name = "ID_CAT_CLIENTE")
    private Long idCatCliente;
    @Getter @Setter @Column(name = "NOMBRE_CLIENTE")
    private String nombreCliente;
    @Getter @Setter @Column(name = "APELLIDO_CLIENTE")
    private String apellidoCliente;
    @Getter @Setter @Column(name = "DIRECCION_CLIENTE")
    private String direccionCliente;
    @Getter @Setter @Column(name = "ESTADO")
    private char estadoCliente;
    @Getter @Setter @Column(name = "ULTIMA_MODIFICACION")
    private Date fechaModificacion;

    @Getter @Setter @Column(name = "FECHA_CREACION")
    private Date fechaCreacion;

    public Long getIdCatCliente() {
        return idCatCliente;
    }

    public void setIdCatCliente(Long idCatCliente) {
        this.idCatCliente = idCatCliente;
    }
}
