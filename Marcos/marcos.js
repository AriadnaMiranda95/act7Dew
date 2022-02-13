document.addEventListener("DOMContentLoaded", init);

function init() {
  let escribir = document.querySelector(".escribir");
  escribir.addEventListener("click", añadirTexto);

  let borrar = document.querySelector(".reiniciar");
  borrar.addEventListener("click", eliminarContenido);

  let nombreContenedor = document.querySelector('.nombreContenedor');
  nombreContenedor.addEventListener("click",()=>{
      alert(`
      Contenedor superior
      Contenedor izquierdo
      Contenedor derecho`)
  })
}

function añadirTexto() {
  let radio = Array.from(document.querySelectorAll('input[type="radio"]'));
  let seleccionado;
  let textoEntrada = document.querySelector(".entrada").value;
  radio.forEach((elemento) => {
    if (elemento.checked) {
      seleccionado = elemento;
    }
  });

  const p = document.querySelector(`.mensaje-${seleccionado.id}`);
  p.innerHTML = textoEntrada;
}

function eliminarContenido(){
    let radio = Array.from(document.querySelectorAll('input[type="radio"]'));
    let seleccionado;
    let textoEntrada = document.querySelector(".entrada").value;
    radio.forEach((elemento) => {
      if (elemento.checked) {
        seleccionado = elemento;
      }
    });
    const contenidos = document.querySelectorAll(`.mensaje-${seleccionado.id}`).forEach(contenido =>{
        contenido.innerHTML = "";
        contenido.value = "";
    })
}

