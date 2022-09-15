let pescaderia = [];

let pescaderiaJSON = JSON.stringify(pescaderia);
console.log(pescaderiaJSON);
localStorage.setItem('pescaderiaJSON', pescaderiaJSON);
let pescaderiaSINJSON = localStorage.getItem(pescaderiaJSON);
pescaderiaSINJSON = JSON.parse(pescaderiaSINJSON);
console.log(pescaderiaSINJSON);

function renderProductos() {
  fetch('array.json')
    .then((response) => response.json())
    .then((pescaderia) => {
      let html = '';
      for (let i = 0; i < pescaderia.length; i++) {
        html = `${html}<div onclick = meter(${pescaderia[i].id}) style = "border:blue 3px  solid; padding:15px" > <p>  producto:${pescaderia[i].producto}</p> <p>especie:${pescaderia[i].especie}</p> <p>¿tiene espinas?:${pescaderia[i].espinas}</p> <p>precio:${pescaderia[i].precio}</p> <p>¿importado?:${pescaderia[i].importado}</p> <p>origen:${pescaderia[i].pais}</p> <p>id:${pescaderia[i].id} </div>`;
      }
      document.getElementById('products').innerHTML = html;
    });
}

renderProductos();

let carrito = [];

function renderCarrito() {
  let html = '';
  for (let i = 0; i < carrito.length; i++) {
    html = `${html}<div  style = "border:blue 3px  solid; width:300px; padding:15px" > <p>  producto:${carrito[i].producto}</p> <p>especie:${carrito[i].especie}</p> <p>¿tiene espinas?:${carrito[i].espinas}</p> <p>precio:${carrito[i].precio}</p> <p>¿importado?:${carrito[i].importado}</p> <p>origen:${carrito[i].pais}</p> <p>id:${carrito[i].id} </p> <p onclick = removeCart(${carrito[i].id}); style="border:blue 2px solid; display:inline"> Remover </p></div>`;
  }
  document.getElementById('carrts').innerHTML = html;
}

function meter(id) {
  fetch('array.json')
    .then((response) => response.json())
    .then((pescaderia) => {
      const productoEncontrado = pescaderia.find((item) => item.id == id);
      carrito.push(productoEncontrado);
      renderCarrito();

      sumaCarrito = carrito.reduce((total, el) => total + el.precio, 0);
      document.getElementById('precioReduce').innerHTML = 'EL PRECIO TOTAL DE SU COMPRA ES ' + sumaCarrito;
      //OPERADOR TERNARIO
      sumaCarrito > 2500
        ? (document.getElementById('price').innerHTML = 'Aprovecha estas ofertas: ofertas')
        : (document.getElementById('price').innerHTML = 'Si tu compra supera los 2500 aprovecha nuestras ofertas');
    });
}
function removeCart(id) {
  carrito.splice(id, 1);
  renderCarrito();
}

/*BOTON HECHO CON SWEET ALERT QUE DISPARA LA HORA Y FECHA CON LUXON*/
let botonTerminar = document.getElementById('btn');
botonTerminar.addEventListener('click', terminar);
function terminar() {
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
