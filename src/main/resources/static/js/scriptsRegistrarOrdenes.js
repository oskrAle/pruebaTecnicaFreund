$(document).ready(function () {
    inicializarTabla();
});

    function inicializarTabla(){
         const datatablesSimple = document.getElementById('productosOrdenTable');
                        if (datatablesSimple) {
                            new simpleDatatables.DataTable(datatablesSimple);
                        }
    }

    function eliminarFila(button) {
        var fila = button.closest("tr");
        fila.remove();
    }

    $(".cantidadTable").on("input", function () {
            sumarColumna();
        });

    function sumarColumna() {
        var table = document.querySelector("table");
        var suma = 0;


        for (var i = 1; i < table.rows.length; i++) {
            var cantidad = table.rows[i].cells[0].querySelector("input[type='text']").value;
             var precio = table.rows[i].cells[2].textContent;
            var valorCantidad = parseFloat(cantidad);
            var valorPrecio = parseFloat(precio);


                suma += valorCantidad * valorPrecio;

        }
        document.getElementById('inputTotaOrden').value = suma;

    }

    async function registrarOrden(){
            var table = document.querySelector("table");
            var suma = 0;
            var datos = table.rows.length;
        for (var i = 1; i < datos; i++) {
                    var cantidad = table.rows[i].cells[0].querySelector("input[type='text']").value;
                     var precio = table.rows[i].cells[2].textContent;
                    var valorCantidad = parseFloat(cantidad);
                    var valorPrecio = parseFloat(precio);


                        suma += valorCantidad * valorPrecio;

                }

        let orden = {};
        let cliente = {};

        cliente.idCatCliente  = document.getElementById('idCliente').value;
        orden.numOrden = document.getElementById('inputNumOrden').value;
        orden.fechaOrden = document.getElementById('fechaOrden').value;
        orden.numOrden = document.getElementById('inputNumOrden').value
        orden.montoTotal = suma;
        orden.estado = "A";
        orden.fkCliente = cliente;

        let detalles = [];
        var precioUnitario = 0;
        var unidades = 0;

        for (var i = 1; i < datos; i++) {
            let detalle = {};
            let productoDetalle = {};
            var d = table.rows[i].cells[0].querySelector("input[type='hidden']").value;

            productoDetalle.idCatProducto = table.rows[i].cells[0].querySelector("input[type='hidden']").value;
            detalle.fkProducto = productoDetalle;
            detalle.unidades = table.rows[i].cells[0].querySelector("input[type='text']").value;
            detalle.precioUnitario = table.rows[i].cells[2].textContent;
            precioUnitario = parseFloat(detalle.precioUnitario);
            unidades =  parseFloat(detalle.unidades);
            detalle.total = unidades * precioUnitario;
            detalles.push(detalle);
        }

        orden.ordenCompraDet = detalles;
        console.log(JSON.stringify(orden));
        const request = await fetch('api/ordenes', {
                    method: 'POST',
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(orden)
                  });

        var url = "OrdenCompra.html;"
                             window.location.href = url;

    }
