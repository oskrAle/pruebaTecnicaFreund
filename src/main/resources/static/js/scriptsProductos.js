$(document).ready(function() {
    cargarProductos();

});

  async function cargarProductos(){
          const request = await fetch('api/productos', {
            method: 'GET',
            headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }
          });
          const productos = await request.json();

          let botonElimina = '';
          let botonActualizar = '';
          let productoHtml = '';
          let listadoHtml = '';
          for (let producto of productos) {
             botonActualizar = '<button class="btn btn-warning btn-sm" onclick="editarProducto(' + producto.idCatProducto + ')">Actualizar</button>';
             botonEliminar = '<button class="btn btn-danger btn-sm" onclick="eliminarProducto(' + producto.idCatProducto + ')">Eliminar</button>';
             productoHtml = '<tr><td>'+producto.descripcionProducto + '</td><td>' + producto.precioUnitario + '</td><td>' + producto.unidadMedida + '</td><td>' + (producto.estado == 'A' ? 'Activo' : 'Anulado') + '</td><td>' + botonActualizar + botonEliminar + '</td></tr>';
            listadoHtml += productoHtml;
          }
        document.querySelector('#productoTable tbody').outerHTML = listadoHtml;
        inicializarTabla();

    }

    function inicializarTabla(){
         const datatablesSimple = document.getElementById('productoTable');
                        if (datatablesSimple) {
                            new simpleDatatables.DataTable(datatablesSimple);
                        }
    }

        function editarProducto(id){
            var url = "editarProducto.html?id=" + id;
            window.location.href = url;
        }

        async function eliminarProducto(id){

        var decision = window.confirm("¿Estás seguro de que deseas eliminar el registro?");
        if (!decision) {
            return;
        }

                      const request = await fetch('api/producto?id='+id, {
                        method: 'GET',
                        headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json',
                                }
                      });
                      const producto = await request.json();
                      producto.estado = "N";
                      const request2 = await fetch('api/producto', {
                                  method: 'DELETE',
                                  headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                  },
                                  body: JSON.stringify(producto)
                                });
                                window.location.href = 'productos.html'
        }


