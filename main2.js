/*TOASTIFY*/

let llego = document.getElementById("llegaste");
llego.addEventListener("click", () => {
  Toastify({
    text: "Probando toast!",
    duration: 3000,
    gravity: "bottom",
    position: "left",
  }).showToast();
});

const formulario = document.getElementById("form");
formulario.addEventListener("submit", validarEnviar);
function validarEnviar(e) {

  e.preventDefault(e); }

