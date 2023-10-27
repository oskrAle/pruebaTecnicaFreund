package com.prueba.tecnica.model;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "cat_producto")
@ToString
@EqualsAndHashCode
public class producto {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Getter
    @Setter
    @Column(name = "ID_CAT_PRODUCTO")
    private Long idCatProducto;

    @Getter @Setter @Column(name = "DESCRIPCION_PRODUCTO")
    private String descripcionProducto;

    @Getter @Setter @Column(name = "PRECIO_UNITARIO")
    private Double precioUnitario;

    @Getter @Setter @Column(name = "UNIDAD_MEDIDA")
    private String unidadMedida;

    @Getter @Setter @Column(name = "ESTADO")
    private String Estado;

    @Getter @Setter @Column(name = "FECHA_CREACION")
    private Date fechaCreacion;

    @Getter @Setter @Column(name = "ULTIMA_MODIFICACION")
    private Date fechaModificacion;

    public Long getIdCatProducto() {
        return idCatProducto;
    }

    public void setIdCatProducto(Long idCatProducto) {
        this.idCatProducto = idCatProducto;
    }
}
