$(document).ready(function () {
    cargarClientes();

    $("#clienteModal").on("click", function () {
        $("#myModalCliente").modal("show");
    });

    $("#busquedaCliente").on("input", function () {
        var textoBusqueda = $(this).val().toLowerCase();
        $("#itemsCliente .list-group-item").each(function () {
            var item = $(this).text().toLowerCase();
            if (item.includes(textoBusqueda)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

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

          let idHidden = '';
          let itemHtml = '';
          let listadoHtml = '';
          for (let cliente of clientes) {
             idHidden = '<input type="hidden" name="campo_oculto" value="'+cliente.idCatCliente+'">';
             itemHtml = '<li class="list-group-item" data-id = "'+cliente.idCatCliente+'" data-valor="'+ cliente.nombreCliente+' '+cliente.apellidoCliente+'">' + cliente.nombreCliente+' '+cliente.apellidoCliente + '</li>';
            listadoHtml += itemHtml;
          }

        document.querySelector('#itemsCliente').innerHTML = listadoHtml;

            $("#itemsCliente .list-group-item").on("click", function () {
                document.getElementById('inputCliente').value = $(this).data("valor");
                document.getElementById('idCliente').value = $(this).data("id");
                $("#myModalCliente").modal("hide");
            });
    }
