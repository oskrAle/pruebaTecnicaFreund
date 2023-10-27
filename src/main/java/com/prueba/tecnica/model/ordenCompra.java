package com.prueba.tecnica.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "orden_compra")
public class ordenCompra {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Getter
    @Setter
    @Column(name = "ID_ORDEN_COMPRA")
    private Long idOrdenCompra;

    @ManyToOne
    @JoinColumn(name = "FK_CLIENTE")
    @Getter @Setter
    private cliente fkCliente;

    @Getter @Setter @Column(name = "NUMERO_ORDEN")
    private String numOrden;

    @Getter @Setter @Column(name = "FECHA_ORDEN")
    private Date fechaOrden;

    @Getter @Setter @Column(name = "MONTO_TOTAL")
    private Double montoTotal;

    @Getter @Setter @Column(name = "ESTADO")
    private String estado;

    @Getter @Setter @Column(name = "FECHA_CREACION")
    private Date fechaCreacion;

    @Getter @Setter @Column(name = "ULTIMA_MODIFICACION")
    private Date ultimaModificacion;

    @OneToMany(mappedBy = "fkOrdenCompra", cascade = CascadeType.ALL, orphanRemoval = true)
    @Getter @Setter
    private List<ordenCompraDetalle> ordenCompraDet;

    public cliente getFkCliente() {
        return fkCliente;
    }

    public void setFkCliente(cliente fkCliente) {
        this.fkCliente = fkCliente;
    }

    public List<ordenCompraDetalle> getOrdenCompraDet() {
        return ordenCompraDet;
    }

    public void setOrdenCompraDet(List<ordenCompraDetalle> ordenCompraDet) {
        this.ordenCompraDet = ordenCompraDet;
    }
}
