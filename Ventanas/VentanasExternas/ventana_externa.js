document.addEventListener("DOMContentLoaded", init);

function init() {
  let pantallaCompleta = document.querySelector(".botones-container");
  let nombre = document.querySelector(".nombre");
  let cerrar = document.querySelector(".cerrar");

  if (window.name === "pantalla-completa") {
    document.querySelector('.mensaje').innerHTML = "El full screen esta en desuso";
  }

  document.querySelector(".autor").addEventListener("click", () => {
    document.querySelector(".mensaje").innerHTML =
      "La página se creó desde ventana.html.";
  });

  nombre.addEventListener("click", () => {
    document.querySelector(".mensaje").innerHTML = window.name;
  });

  cerrar.addEventListener("click", () => {
    window.close();
  });
}
