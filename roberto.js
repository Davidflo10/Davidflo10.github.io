let carrito = [];

function agregarAlCarrito(precio, nombre) {
    const productoExistente = carrito.find(producto => producto.nombre === nombre);
    if (productoExistente) {
        productoExistente.cantidad += 1;
    } else {
        carrito.push({ nombre, precio, cantidad: 1 });
    }
    mostrarCarrito();
}

function mostrarCarrito() {
    const carritoElemento = document.getElementById('carrito');
    carritoElemento.innerHTML = '';
    let total = 0;

    carrito.forEach(producto => {
        total += producto.precio * producto.cantidad;
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - $${producto.precio} x ${producto.cantidad}`;
        carritoElemento.appendChild(li);
    });

    const totalElemento = document.getElementById('totalCompra');
    totalElemento.textContent = `Total: $${total}`;
}



  const iva = total * ivaRate; 
  const totalConIva = total + iva; 

  document.getElementById('totalCompra').textContent = `Total: $${total.toFixed(2)} (IVA: $${iva.toFixed(2)}) - Total con IVA: $${totalConIva.toFixed(2)}`;



function comprar() {
  const metodoPagoDiv = document.getElementById('metodoPago');
  metodoPagoDiv.style.display = 'block';
}

function confirmarCompra() {
  const metodoPagoSelect = document.getElementById('metodoPagoSelect');
  const metodoPagoElegido = metodoPagoSelect.value;
  alert(`Compra realizada con éxito utilizando ${metodoPagoElegido}. Gracias por su compra!`);
}

window.onload = function() {
    mostrarFormulario();
  };
  
  function mostrarFormulario() {
    const metodoPagoSelect = document.getElementById('metodoPagoSelect');
    const formularioTarjeta = document.getElementById('formularioTarjeta');
    const formularioPaypal = document.getElementById('formularioPaypal');
    if (metodoPagoSelect.value === 'tarjeta') {
      formularioTarjeta.style.display = 'block';
      formularioPaypal.style.display = 'none';
    } else if (metodoPagoSelect.value === 'paypal') {
      formularioTarjeta.style.display = 'none';
      formularioPaypal.style.display = 'block';
    } else {
      formularioTarjeta.style.display = 'none';
      formularioPaypal.style.display = 'none';
    }
  }
  
  function confirmarCompra() {
    const metodoPagoSelect = document.getElementById('metodoPagoSelect');
    const metodoPagoElegido = metodoPagoSelect.value;
    if (metodoPagoElegido === 'tarjeta') {
      const nombreTarjeta = document.getElementById('nombreTarjeta').value;
      const numeroTarjeta = document.getElementById('numeroTarjeta').value;
      const fechaExpiracion = document.getElementById('fechaExpiracion').value;
      alert(`Compra realizada con éxito utilizando tarjeta de crédito. Gracias por su compra, ${nombreTarjeta}!`);
    } else {
      alert(`Compra realizada con éxito utilizando ${metodoPagoElegido}. Gracias por su compra!`);
    }
  }
  
  function confirmarCompraPaypal() {
    const correoPaypal = document.getElementById('correoPaypal').value;
    const contrasenaPaypal = document.getElementById('contrasenaPaypal').value;
    alert(`Compra realizada con éxito utilizando PayPal. Gracias por su compra, ${correoPaypal}!`);
  }