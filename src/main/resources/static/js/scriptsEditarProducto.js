$(document).ready(function() {
    cargarProducto();
});

  async function cargarProducto(){
  const valores = window.location.search;
            const urlParams = new URLSearchParams(valores);
          const request = await fetch('api/producto?id='+urlParams.get('id'), {
            method: 'GET',
            headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }
          });
          const producto = await request.json();

          document.getElementById('inputDescripcion').value = producto.descripcionProducto;
          document.getElementById('inputMedida').value = producto.unidadMedida;
          document.getElementById('inputPrecio').value = producto.precioUnitario;

    }

      async function editarProducto(){
      const valores = window.location.search;
                  const urlParams = new URLSearchParams(valores);
        let producto = {};

        producto.idCatProducto = urlParams.get('id');
        producto.descripcionProducto = document.getElementById('inputDescripcion').value;
        producto.unidadMedida = document.getElementById('inputMedida').value;
        producto.precioUnitario = document.getElementById('inputPrecio').value;
        producto.estado = "A";

        const request = await fetch('api/producto', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(producto)
          });

          alert("Producto Actualizado exitosamente: ");
            window.location.href = 'productos.html'


        }



