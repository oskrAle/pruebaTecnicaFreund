$(document).ready(function() {

});

  async function registrarCliente(){
    let cliente = {};

    cliente.nombreCliente = document.getElementById('inputNombre').value;
    cliente.apellidoCliente = document.getElementById('inputApellido').value;
    cliente.direccionCliente = document.getElementById('inputDireccion').value;
    cliente.estadoCliente = "A";

    const request = await fetch('api/clientes', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cliente)
      });

      alert("Cliente Registrado exitosamente: ");
        window.location.href = 'clientes.html'


    }


