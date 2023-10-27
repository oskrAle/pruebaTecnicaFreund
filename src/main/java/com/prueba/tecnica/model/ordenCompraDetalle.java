package com.prueba.tecnica.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "orden_compra_detalle")
@ToString
@EqualsAndHashCode
public class ordenCompraDetalle {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Getter
    @Setter
    @Column(name = "ID_ORDEN_COMPRA_DETALLE")
    private Long idOrdenCompraDetalle;

    @ManyToOne
    @JoinColumn(name = "FK_ORDEN_COMPRA")
    @Getter @Setter @JsonIgnore
    private ordenCompra fkOrdenCompra;

    @ManyToOne
    @JoinColumn(name = "FK_CAT_PRODUCTO")
    @Getter @Setter
    private producto fkProducto;

    @Getter @Setter @Column(name = "UNIDADES")
    private Double unidades;

    @Getter @Setter @Column(name = "PRECIO_UNITARIO")
    private Double precioUnitario;

    @Getter @Setter @Column(name = "TOTAL")
    private Double total;

    @Getter @Setter @Column(name = "FECHA_CREACION")
    private Date fechaCreacion;

    @Getter @Setter @Column(name = "ULTIMA_MODIFICACION")
    private Date ultimaModificacion;

    public ordenCompra getFkOrdenCompra() {
        return fkOrdenCompra;
    }

    public void setFkOrdenCompra(ordenCompra fkOrdenCompra) {
        this.fkOrdenCompra = fkOrdenCompra;
    }

    public producto getFkProducto() {
        return fkProducto;
    }

    public void setFkProducto(producto fkProducto) {
        this.fkProducto = fkProducto;
    }
}
