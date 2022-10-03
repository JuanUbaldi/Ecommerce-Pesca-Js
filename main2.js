let stars1 = document.getElementById('star-1');

stars1.addEventListener('click', tocar);
function tocar() {
  if (stars1.style.background !== 'yellow') {
    stars1.style.background = 'yellow';
  } else {
    stars1.style.background = 'red';
  }
}

const postBtn = document.getElementById('postBtn');
const input = document.getElementById('commentInput');
const comments = document.getElementById('comments');

const comentarios = [];


  const newComment = document.createElement('p');
  const comentario = "Dejanos tu comentario, y decinos cual receta te gusta mas";
  newComment.innerHTML = comentario;
  comentarios.push(newComment);

comentarios.forEach((comentario) => comments.append(comentario));
postBtn.addEventListener('click', addComment);
function addComment(event) {
  event.preventDefault();

  if (input.value) {
    if (input.value.length < 50) {
      const newComment = document.createElement('p');
      newComment.innerHTML = input.value;
      comments.append(newComment);
    } else {
      swal('Su comentario excede el máximo de caracteres');
    }
  } else {
    swal('escribi un comentario');
  }
  input.value = '';
}
