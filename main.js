/*SWEET ALERT CON LUXON, ALERTA QUE AVISA A QUE HORA TERMINO LA COMPRA*/
function finalizar() {
  Swal.fire({
    title: '¿estas seguro que queres finalizar tu compra?',

    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'si!',
    cancelButtonText: 'no, aun no!',
  }).then((result) => {
    if (result.isConfirmed) {
      let DateTime = luxon.DateTime;
      let tiempo = DateTime.now();
      Swal.fire('buenisimo!!', 'Usted culmino su compra el: ' + tiempo.toLocaleString() + ' a las ' + tiempo.toLocaleString(DateTime.TIME_SIMPLE), 'success');
    }
  });
}

/*SWEET ALERT DANDO OPCION DE HORARIOS DE NAVEGACION*/
async function seleccionar() {
  const { value: fruit } = await Swal.fire({
    title: 'selecciona un horario',
    input: 'select',
    inputOptions: {
      mañana: {
        '6 am': '6:00hs',
        '8 am': '8:00hs',
        '9:30 am': '9:30hs',
        '11 am': '11:00hs',
      },
      tarde: {
        '13 pm': '13:00hs',
        '14:30 pm': '14:30hs',
        '16 pm': '16:00hs',
      },
    },
    inputPlaceholder: 'selecciona un horario',
    showCancelButton: true,
    inputValidator: (value) => {
      return new Promise((resolve) => {
        if (value !== '') {
          resolve();
        } else {
          resolve('pone algo');
        }
      });
    },
  });
  if (fruit) {
    Swal.fire(`seleccionaste las: ${fruit}, que tengas un hermoso dia de pesca!!`);
  }
}

/*ACA COMIENZA EL CARRITO*/

function renderProductos() {
  let html = '';
  fetch('array.json')
    .then((response) => response.json())
    .then((pescados) => {
      let storage = JSON.stringify(pescados);
      localStorage.setItem('storage', storage);
      for (let i = 0; i < pescados.length; i++) {
        html = `${html}<div class="tarjetas" onclick = meter(${pescados[i].id}) style = " color:white;  background-color:  rgb(199, 84, 26); font-weight:bolder; font-size:20px;" ><img style = " width:130px; height:100px" src=${pescados[i].img} alt=${pescados[i].producto}/> <p>  producto: ${pescados[i].producto}</p <p>precio: ${pescados[i].precio}</p> </div>`;

        document.getElementById('products').innerHTML = html;
      }
    });
}

renderProductos();

let carrito = [];

function renderCarrito() {
  let html = '';
  for (let i = 0; i < carrito.length; i++) {
    html = `${html}<div  style = " border:blue 3px  solid;width:300px; padding:15px" > <p>  producto:${carrito[i].producto}</p>  <p>precio:${carrito[i].precio}</p> <img style=" width:100px; height:100px" src="${carrito[i].img}"/><p onclick = removeCart(${carrito[i].id}); style="border:blue 2px solid; display:inline"> Remover </p>  </div>`;
  }
  document.getElementById('carts').innerHTML = html;
}

function meter(id) {
  fetch('array.json')
    .then((response) => response.json())
    .then((pescaderia) => {
      const productoEncontrado = pescaderia.find((item) => item.id == id);
      carrito.push(productoEncontrado);
      renderCarrito();
      let sumaCarrito = carrito.reduce((total, el) => total + el.precio, 0);
      document.getElementById('precioReduce').innerHTML = 'EL PRECIO TOTAL DE SU COMPRA ES ' + sumaCarrito;
    });
}

function removeCart(id) {
  const item = carrito.find((carrito) => carrito.id === id);
  const indice = carrito.indexOf(item);
  carrito.splice(indice, 1);
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Removido',
    showConfirmButton: false,
    timer: 1500,
  });

  renderCarrito();
  let sumaCarrito = carrito.reduce((total, el) => total + el.precio, 0);
  document.getElementById('precioReduce').innerHTML = 'EL PRECIO TOTAL DE SU COMPRA ES ' + sumaCarrito;
}
removeCart(id);
