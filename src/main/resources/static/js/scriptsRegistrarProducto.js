$(document).ready(function() {

});

  async function registrarProductos(){
    let producto = {};

    producto.descripcionProducto = document.getElementById('inputDescripcion').value;
    producto.precioUnitario = document.getElementById('inputPrecio').value;
    producto.unidadMedida = document.getElementById('inputMedida').value;
    producto.estado = "A";

    const request = await fetch('api/productos', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(producto)
      });

      alert("Producto creado exitosamente: " + producto.Estado);
        window.location.href = 'Productos.html'


    }




