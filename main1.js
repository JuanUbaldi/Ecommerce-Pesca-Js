/*DESESTRUCTURACION DE ARRAYS*/
const [merlusa, , , corvina] = productos;

function renderOfertas1() {
  let html1 = "";
  html1 = `${html1}<div  style = "border:blue 3px  solid; width:300px; padding:15px" > <p>  producto:${
    merlusa.producto
  } 20% de descuento!!</p> <p>especie:${
    merlusa.especie
  }</p> <p>¿tiene espinas?:${merlusa.espinas}</p> <p>precio:${
    merlusa.precio * 0.8
  }</p> <p>¿importado?:${merlusa.importado}</p> <p>origen:${
    merlusa.pais
  }</p> <p>id:${merlusa.id} </p> </div>`;
  document.getElementById("ofertas1").innerHTML = html1;
}

renderOfertas1();

function renderOfertas2() {
  let html2 = "";
  html2 = `${html2}<div  style = "border:blue 3px  solid; width:300px; padding:15px" > <p>  producto:${
    corvina.producto
  } 40% de descuento!!</p> <p>especie:${
    corvina.especie
  }</p> <p>¿tiene espinas?:${merlusa.espinas}</p> <p>precio:${parseInt(
    corvina.precio * 0.6
  )}</p> <p>¿importado?:${corvina.importado}</p> <p>origen:${
    corvina.pais
  }</p> <p>id:${corvina.id} </p> </div>`;
  document.getElementById("ofertas2").innerHTML = html2;
}

renderOfertas2();
