document.addEventListener("DOMContentLoaded", init);


function init(){

    let imagenes = document.querySelectorAll('img');
    imagenes.forEach((imagen)=>{
        imagen.addEventListener("click", mostrarImagen);
    })

}


function mostrarImagen(){

 window.open("ventanaExterna/ventana_externa.html", `${this.dataset.nombre}`,  "height=600,width=520,status=yes,resizable=yes,menubar=no")

}