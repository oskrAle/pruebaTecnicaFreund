$(document).ready(function() {
    cargarOrdenes();

});

  async function cargarOrdenes(){
          const request = await fetch('api/ordenes', {
            method: 'GET',
            headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }
          });
          const ordenes = await request.json();

          let botonElimina = '';
          let botonActualizar = '';
          let ordenesHtml = '';
          let listadoHtml = '';
          for (let orden of ordenes) {
             botonActualizar = '<button class="btn btn-warning btn-sm" onclick="editarOrden(' + orden.idOrdenCompra + ')">Actualizar</button>';
             botonEliminar = '<button class="btn btn-danger btn-sm" onclick="eliminarOrden(' + orden.idOrdenCompra + ')">Eliminar</button>';
             ordenesHtml = '<tr><td>'+ orden.numOrden + '</td><td>' + orden.fkCliente.nombreCliente + ' ' + orden.fkCliente.apellidoCliente + '</td><td>'+ orden.fechaOrden + '</td><td>'+ orden.montoTotal +'</td><td>' + botonActualizar + botonEliminar + '</td></tr>';
            listadoHtml += ordenesHtml;
          }

        document.querySelector('#ordenesTable tbody').outerHTML = listadoHtml;
        inicializarTabla();

    }

        async function eliminarOrden(id){
            var decision = window.confirm("¿Estás seguro de que deseas eliminar el registro?");
                if (!decision) {
                    return;
                }
            const request = await fetch('api/ordenes?id='+id, {
                                method: 'DELETE',
                                headers: {
                                            'Accept': 'application/json',
                                            'Content-Type': 'application/json',
                                        }
                              });

                     var url = "OrdenCompra.html;"
                     window.location.href = url;
        }

    function inicializarTabla(){
         const datatablesSimple = document.getElementById('ordenesTable');
                        if (datatablesSimple) {
                            new simpleDatatables.DataTable(datatablesSimple);
                        }
    }




