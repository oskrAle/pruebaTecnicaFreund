$(document).ready(function() {
    cargarCliente();
});

  async function cargarCliente(){
  const valores = window.location.search;
            const urlParams = new URLSearchParams(valores);
          const request = await fetch('api/cliente?id='+urlParams.get('id'), {
            method: 'GET',
            headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }
          });
          const cliente = await request.json();

          document.getElementById('inputNombre').value = cliente.nombreCliente;
          document.getElementById('inputApellido').value = cliente.apellidoCliente;
          document.getElementById('inputDireccion').value = cliente.direccionCliente;

    }

      async function editarCliente(){
      const valores = window.location.search;
                  const urlParams = new URLSearchParams(valores);
        let cliente = {};

        cliente.idCatCliente = urlParams.get('id');
        cliente.nombreCliente = document.getElementById('inputNombre').value;
        cliente.apellidoCliente = document.getElementById('inputApellido').value;
        cliente.direccionCliente = document.getElementById('inputDireccion').value;
        cliente.estadoCliente = "A";

        const request = await fetch('api/cliente', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(cliente)
          });

          alert("Cliente Actualizado exitosamente: ");
            window.location.href = 'clientes.html'


        }


