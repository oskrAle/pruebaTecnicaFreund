$(document).ready(function() {
    cargarClientes();

});

  async function cargarClientes(){
          const request = await fetch('api/clientes', {
            method: 'GET',
            headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }
          });
          const clientes = await request.json();

          let botonElimina = '';
          let botonActualizar = '';
          let usuarioHtml = '';
          let listadoHtml = '';
          for (let cliente of clientes) {
             botonActualizar = '<button class="btn btn-warning btn-sm" onclick="editarCliente(' + cliente.idCatCliente + ')">Actualizar</button>';
             botonEliminar = '<button class="btn btn-danger btn-sm" onclick="eliminarCliente(' + cliente.idCatCliente + ')">Eliminar</button>';
             usuarioHtml = '<tr><td>'+cliente.nombreCliente + ' ' + cliente.apellidoCliente + '</td><td>' + cliente.direccionCliente + '</td><td>' + (cliente.estadoCliente == 'A' ? 'Activo' : 'Anulado') + '</td><td>' + botonActualizar + botonEliminar + '</td></tr>';
            listadoHtml += usuarioHtml;
          }

        document.querySelector('#clientesTable tbody').outerHTML = listadoHtml;
        inicializarTabla();

    }

    function inicializarTabla(){
         const datatablesSimple = document.getElementById('clientesTable');
                        if (datatablesSimple) {
                            new simpleDatatables.DataTable(datatablesSimple);
                        }
    }

    function editarCliente(id){
        var url = "editarCliente.html?id=" + id;
        window.location.href = url;
    }

    async function eliminarCliente(id){

    var decision = window.confirm("¿Estás seguro de que deseas eliminar el registro?");
    if (!decision) {
        return;
    }

                  const request = await fetch('api/cliente?id='+id, {
                    method: 'GET',
                    headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                            }
                  });
                  const cliente = await request.json();
                  cliente.estadoCliente = "N";
                  const request2 = await fetch('api/cliente', {
                              method: 'DELETE',
                              headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                              },
                              body: JSON.stringify(cliente)
                            });
                            window.location.href = 'clientes.html'
    }


