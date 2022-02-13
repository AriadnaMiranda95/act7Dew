document.addEventListener("DOMContentLoaded", init);

function init() {
  let pantallaCompleta = document.querySelector(".botones-container");
  let nombre = document.querySelector(".nombre");
  let cerrar = document.querySelector(".cerrar");

  if (window.name === "pantalla-completa") {
    pantallaCompleta.innerHTML += `<p>FullScreen se encuentra en desuso.</p>`;
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
