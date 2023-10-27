$(document).ready(function () {
    cargarProductos();
    // Mostrar el modal al hacer clic en el botón "Mostrar Lista"
    $("#modalProducto").on("click", function () {
        $("#myModalProducto").modal("show");
    });




    $("#busquedaProducto").on("input", function () {
        var textoBusqueda = $(this).val().toLowerCase();
        $("#itemsProducto .list-group-item").each(function () {
            var item = $(this).text().toLowerCase();
            if (item.includes(textoBusqueda)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

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

          let idHidden = '';
          let itemHtml = '';
          let listadoHtml = '';
          for (let producto of productos) {

             itemHtml = '<li class="list-group-item" data-valor="'+ producto.descripcionProducto+'" data-id="'+producto.idCatProducto+'">' + producto.descripcionProducto + '</li>';
            listadoHtml += itemHtml;
          }

        document.querySelector('#itemsProducto').innerHTML = listadoHtml;

            $("#itemsProducto .list-group-item").on("click", function () {
                //document.getElementById('inputCliente').value = $(this).data("valor");
                //alert($(this).data("id"));
                cargarProductoTable($(this).data("id"));
                $("#myModalProducto").modal("hide");
            });
    }

      async function cargarProductoTable(id){

              const request = await fetch('api/producto?id='+id, {
                method: 'GET',
                headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        }
              });
              const producto = await request.json();

              //let productoRowHtml = '<td><input type="text" class="cantidadTable" id="input'+producto.idCatProducto+'" class="form-control form-control-sm" value="0"/><input type="hidden" id="id'+producto.idCatProducto+'" value="'+producto.idCatProducto+'"/></td><td>'+producto.descripcionProducto+'</td><td>'+producto.precioUnitario+'</td><td>'+producto.unidadMedida+'</td><td><button class="btn btn-danger btn-sm" onclick="eliminarFila(this)">Quitar</button></td>';

               var tablaProductos = document.querySelector("table");

               if (tablaProductos.rows.length > 0) {
                 if(tablaProductos.rows[1].cells.length < 2)
                    tablaProductos.deleteRow(1);
               }

               var fila = tablaProductos.insertRow();



               var celda0 = fila.insertCell(0);
               celda0.innerHTML = '<input type="text" class="cantidadTable" id="input'+producto.idCatProducto+'" class="form-control form-control-sm" value="0"/><input type="hidden" id="id'+producto.idCatProducto+'" value="'+producto.idCatProducto+'"/>'

               var celda1 = fila.insertCell(1);
               celda1.innerHTML = producto.descripcionProducto;

               var celda2 = fila.insertCell(2);
               celda2.innerHTML = producto.precioUnitario;

               var celda3 = fila.insertCell(3);
               celda3.innerHTML = producto.unidadMedida;

               var celda4 = fila.insertCell(4);
               celda4.innerHTML = '<button class="btn btn-danger btn-sm" onclick="eliminarFila(this)">Quitar</button>';


                //refrescarTabla();



        }

        function refrescarTabla(){
                 const datatablesSimple = document.querySelector("table");
                                if (datatablesSimple) {
                                    new simpleDatatables.DataTable(datatablesSimple);
                                }
            }