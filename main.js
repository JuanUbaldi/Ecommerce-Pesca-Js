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
      document.getElementById(
        'products'
      ).innerHTML = `<div onclick = meter(${pescaderia[0].id}) style = " margin:25%; color:white; opacity: 0.5; background-color:  rgb(199, 84, 26); font-weight:bolder; font-size:20px;" > <p>  producto:${pescaderia[0].producto}</p <p>precio:${pescaderia[0].precio}</p> <p>¿importado?:${pescaderia[0].importado}</p> <p>origen:${pescaderia[0].pais} </p></div>`;
      document.getElementById(
        'productsA'
      ).innerHTML = `<div onclick = meter(${pescaderia[1].id}) style =  " margin:25%; color:white; opacity: 0.5; background-color:  rgb(199, 84, 26); font-weight:bolder; font-size:20px;" > <p>  producto:${pescaderia[1].producto}</p <p>precio:${pescaderia[1].precio}</p> <p>¿importado?:${pescaderia[1].importado}</p> <p>origen:${pescaderia[1].pais} </p></div>`;
      document.getElementById(
        'productsB'
      ).innerHTML = `<div onclick = meter(${pescaderia[2].id}) style =  " margin:25%; color:white; opacity: 0.5; background-color:  rgb(199, 84, 26); font-weight:bolder; font-size:20px;"> <p>  producto:${pescaderia[2].producto}</p <p>precio:${pescaderia[2].precio}</p> <p>¿importado?:${pescaderia[2].importado}</p> <p>origen:${pescaderia[2].pais} </p></div>`;
      document.getElementById(
        'productsC'
      ).innerHTML = `<div onclick = meter(${pescaderia[3].id}) style =  " margin:25%; color:white; opacity: 0.5; background-color:  rgb(199, 84, 26); font-weight:bolder; font-size:20px;" > <p>  producto:${pescaderia[3].producto}</p <p>precio:${pescaderia[3].precio}</p> <p>¿importado?:${pescaderia[3].importado}</p> <p>origen:${pescaderia[3].pais} </p></div>`;
      document.getElementById(
        'productsD'
      ).innerHTML = `<div onclick = meter(${pescaderia[4].id}) style =  " margin:25%; color:white; opacity: 0.5; background-color:  rgb(199, 84, 26); font-weight:bolder; font-size:20px;" > <p>  producto:${pescaderia[4].producto}</p <p>precio:${pescaderia[4].precio}</p> <p>¿importado?:${pescaderia[4].importado}</p> <p>origen:${pescaderia[4].pais} </p></div>`;
      document.getElementById(
        'productsE'
      ).innerHTML = `<div onclick = meter(${pescaderia[5].id}) style =  " margin:25%; color:white; opacity: 0.5; background-color:  rgb(199, 84, 26); font-weight:bolder; font-size:20px;" > <p>  producto:${pescaderia[5].producto}</p <p>precio:${pescaderia[5].precio}</p> <p>¿importado?:${pescaderia[5].importado}</p> <p>origen:${pescaderia[5].pais} </p></div>`;
      document.getElementById(
        'productsF'
      ).innerHTML = `<div onclick = meter(${pescaderia[6].id}) style =  " margin:25%; color:white; opacity: 0.5; background-color:  rgb(199, 84, 26); font-weight:bolder; font-size:20px;" > <p>  producto:${pescaderia[6].producto}</p <p>precio:${pescaderia[6].precio}</p> <p>¿importado?:${pescaderia[6].importado}</p> <p>origen:${pescaderia[6].pais} </p></div>`;
      document.getElementById(
        'productsG'
      ).innerHTML = `<div onclick = meter(${pescaderia[7].id}) style =  " margin:25%; color:white; opacity: 0.5; background-color:  rgb(199, 84, 26); font-weight:bolder; font-size:20px;" > <p>  producto:${pescaderia[7].producto}</p <p>precio:${pescaderia[7].precio}</p> <p>¿importado?:${pescaderia[7].importado}</p> <p>origen:${pescaderia[7].pais} </p></div>`;
      document.getElementById(
        'productsH'
      ).innerHTML = `<div onclick = meter(${pescaderia[8].id}) style = "  margin:25%; color:white; opacity: 0.5; background-color:  rgb(199, 84, 26); font-weight:bolder; font-size:20px;" > <p>  producto:${pescaderia[8].producto}</p <p>precio:${pescaderia[8].precio}</p> <p>¿importado?:${pescaderia[8].importado}</p> <p>origen:${pescaderia[8].pais} </p></div>`;
      document.getElementById(
        'productsI'
      ).innerHTML = `<div onclick = meter(${pescaderia[9].id}) style =  " margin:25%; color:white; opacity: 0.5; background-color:  rgb(199, 84, 26); font-weight:bolder; font-size:20px;" > <p>  producto:${pescaderia[9].producto}</p <p>precio:${pescaderia[9].precio}</p> <p>¿importado?:${pescaderia[9].importado}</p> <p>origen:${pescaderia[9].pais} </p></div>`;
      document.getElementById(
        'productsJ'
      ).innerHTML = `<div onclick = meter(${pescaderia[10].id}) style =  " margin:25%; color:white; opacity: 0.5; background-color:  rgb(199, 84, 26); font-weight:bolder; font-size:20px;" > <p>  producto:${pescaderia[10].producto}</p>  <p>precio:${pescaderia[10].precio}</p> <p>¿importado?:${pescaderia[10].importado}</p> <p>origen:${pescaderia[10].pais} </p> </div>`;
      document.getElementById(
        'productsK'
      ).innerHTML = `<div onclick = meter(${pescaderia[11].id}) style =  " margin:25%; color:white; opacity: 0.5; background-color:  rgb(199, 84, 26); font-weight:bolder; font-size:20px;" > <p>  producto:${pescaderia[11].producto}</p>  <p>precio:${pescaderia[11].precio}</p> <p>¿importado?:${pescaderia[11].importado}</p> <p>origen:${pescaderia[11].pais} </p> </div>`;
      document.getElementById(
        'productsL'
      ).innerHTML = `<div onclick = meter(${pescaderia[12].id}) style =  " margin:25%; color:white; opacity: 0.5; background-color:  rgb(199, 84, 26); font-weight:bolder; font-size:20px;" > <p>  producto:${pescaderia[12].producto}</p>  <p>precio:${pescaderia[12].precio}</p> <p>¿importado?:${pescaderia[12].importado}</p> <p>origen:${pescaderia[12].pais} </p> </div>`;
      document.getElementById(
        'productsM'
      ).innerHTML = `<div onclick = meter(${pescaderia[13].id}) style =  " margin:25%; color:white; opacity: 0.5; background-color:  rgb(199, 84, 26); font-weight:bolder; font-size:20px;" > <p>  producto:${pescaderia[13].producto}</p>  <p>precio:${pescaderia[13].precio}</p> <p>¿importado?:${pescaderia[13].importado}</p> <p>origen:${pescaderia[13].pais} </p> </div>`;
      document.getElementById(
        'productsN'
      ).innerHTML = `<div onclick = meter(${pescaderia[14].id}) style =  " margin:25%; color:white; opacity: 0.5; background-color:  rgb(199, 84, 26); font-weight:bolder; font-size:20px;" > <p>  producto:${pescaderia[14].producto}</p>  <p>precio:${pescaderia[14].precio}</p> <p>¿importado?:${pescaderia[14].importado}</p> <p>origen:${pescaderia[14].pais} </p> </div>`;
      document.getElementById(
        'productsO'
      ).innerHTML = `<div onclick = meter(${pescaderia[15].id}) style =  " margin:25%; color:white; opacity: 0.5; background-color:  rgb(199, 84, 26); font-weight:bolder; font-size:20px;" > <p>  producto:${pescaderia[15].producto}</p>  <p>precio:${pescaderia[15].precio}</p> <p>¿importado?:${pescaderia[15].importado}</p> <p>origen:${pescaderia[15].pais} </p> </div>`;
      document.getElementById(
        'productsP'
      ).innerHTML = `<div onclick = meter(${pescaderia[16].id}) style =  " margin:25%; color:white; opacity: 0.5; background-color:  rgb(199, 84, 26); font-weight:bolder; font-size:20px;" > <p>  producto:${pescaderia[16].producto}</p>  <p>precio:${pescaderia[16].precio}</p> <p>¿importado?:${pescaderia[16].importado}</p> <p>origen:${pescaderia[16].pais} </p> </div>`;
      document.getElementById(
        'productsQ'
      ).innerHTML = `<div onclick = meter(${pescaderia[17].id}) style =  " margin:25%; color:white; opacity: 0.5; background-color:  rgb(199, 84, 26); font-weight:bolder; font-size:20px;" > <p>  producto:${pescaderia[17].producto}</p>  <p>precio:${pescaderia[17].precio}</p> <p>¿importado?:${pescaderia[17].importado}</p> <p>origen:${pescaderia[17].pais} </p> </div>`;
      document.getElementById(
        'productsR'
      ).innerHTML = `<div onclick = meter(${pescaderia[18].id}) style =  " margin:25%; color:white; opacity: 0.5; background-color:  rgb(199, 84, 26); font-weight:bolder; font-size:20px;" > <p>  producto:${pescaderia[18].producto}</p>  <p>precio:${pescaderia[18].precio}</p> <p>¿importado?:${pescaderia[18].importado}</p> <p>origen:${pescaderia[18].pais} </p> </div>`;
      document.getElementById(
        'productsS'
      ).innerHTML = `<div onclick = meter(${pescaderia[19].id}) style =  " margin:25%; color:white; opacity: 0.5; background-color:  rgb(199, 84, 26); font-weight:bolder; font-size:20px;" > <p>  producto:${pescaderia[19].producto}</p>  <p>precio:${pescaderia[19].precio}</p> <p>¿importado?:${pescaderia[19].importado}</p> <p>origen:${pescaderia[19].pais} </p> </div>`;
      document.getElementById(
        'productsT'
      ).innerHTML = `<div onclick = meter(${pescaderia[20].id}) style =  " margin:25%; color:white; opacity: 0.5; background-color:  rgb(199, 84, 26); font-weight:bolder; font-size:20px;" > <p>  producto:${pescaderia[20].producto}</p> <p>precio:${pescaderia[20].precio}</p> </div>`;
      document.getElementById(
        'productsU'
      ).innerHTML = `<div onclick = meter(${pescaderia[21].id}) style =  " margin:25%; color:white; opacity: 0.5; background-color:  rgb(199, 84, 26); font-weight:bolder; font-size:20px;" > <p>  producto:${pescaderia[21].producto}</p> <p>precio:${pescaderia[21].precio}</p> </div>`;
      document.getElementById(
        'productsV'
      ).innerHTML = `<div onclick = meter(${pescaderia[22].id}) style =  " margin:25%; color:white; opacity: 0.5; background-color:  rgb(199, 84, 26); font-weight:bolder; font-size:20px;" > <p>  producto:${pescaderia[22].producto}</p> <p>precio:${pescaderia[22].precio}</p> </div>`;
      document.getElementById(
        'productsW'
      ).innerHTML = `<div onclick = meter(${pescaderia[23].id}) style =  " margin:25%; color:white; opacity: 0.5; background-color:  rgb(199, 84, 26); font-weight:bolder; font-size:20px;" > <p>  producto:${pescaderia[23].producto}</p> <p>precio:${pescaderia[23].precio}</p> </div>`;
      document.getElementById(
        'productsX'
      ).innerHTML = `<div onclick = meter(${pescaderia[24].id}) style =  " margin:25%; color:white; opacity: 0.5; background-color:  rgb(199, 84, 26); font-weight:bolder; font-size:20px;" > <p>  producto:${pescaderia[24].producto}</p> <p>precio:${pescaderia[24].precio}</p> </div>`;
      document.getElementById(
        'productsY'
      ).innerHTML = `<div onclick = meter(${pescaderia[25].id}) style =  " margin:25%; color:white; opacity: 0.5; background-color:  rgb(199, 84, 26); font-weight:bolder; font-size:20px;" > <p>  producto:${pescaderia[25].producto}</p> <p>precio:${pescaderia[25].precio}</p> </div>`;
      document.getElementById(
        'productsZ'
      ).innerHTML = `<div onclick = meter(${pescaderia[26].id}) style =  " margin:25%; color:white; opacity: 0.5; background-color:  rgb(199, 84, 26); font-weight:bolder; font-size:20px;" > <p>  producto:${pescaderia[26].producto}</p> <p>precio:${pescaderia[26].precio}</p> </div>`;
    });
}

renderProductos();

let carrito = [];

function renderCarrito() {
  let html = '';
  for (let i = 0; i < carrito.length; i++) {
    html = `${html}<div  style = " border:blue 3px  solid;width:300px; padding:15px" > <p>  producto:${carrito[i].producto}</p> <p>especie:${carrito[i].especie}</p> <p>¿tiene espinas?:${carrito[i].espinas}</p> <p>precio:${carrito[i].precio}</p> <p>¿importado?:${carrito[i].importado}</p> <p>origen:${carrito[i].pais}</p> <img style=" width:100px; height:100px" src="${carrito[i].img}"/> <p>id:${carrito[i].id} </p>  <p onclick = removeCart(${carrito[i].id}); style="border:blue 2px solid; display:inline"> Remover </p>  </div>`;
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

