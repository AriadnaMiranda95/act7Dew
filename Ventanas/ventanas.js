document.addEventListener("DOMContentLoaded", init);


function init(){

    const b1 = document.querySelector('.b1');
    b1.addEventListener("click", sinCaracteristicas);
    
    const b2 = document.querySelector('.b2');
    b2.addEventListener("click", sinCaracteristicas);

    const b6 = document.querySelector('.b6');
    b6.addEventListener("click", cerrarVentanas);

    const b3 = document.querySelector('.b3');
    b3.addEventListener("click", conCaracteristicas);

    const b4 = document.querySelector('.b4');
    b4.addEventListener("click", conCaracteristicas);

    const b5 = document.querySelector('.b5');
    b5.addEventListener("click", abrirCompleta);
}

let arrayVentanas = [];

function sinCaracteristicas(){
    let cantidadAbierta = this.className === 'b1' ? 1 : 5;
    for(let i = 0; i < cantidadAbierta; i++){
        let ventana_externa = window.open("ventanasExternas/ventana_externa.html", `Sincaracteristicas-${i}`, "");
        arrayVentanas.push(ventana_externa);
    }
    console.log(arrayVentanas)
}

function cerrarVentanas(){
    arrayVentanas.forEach(ventana=>{
        ventana.close();
    })
    arrayVentanas = [];
}

function conCaracteristicas(){
    let ventana = this.className === 'b3' 
    ? window.open("ventanasExternas/ventana_externa.html" , `b3`, "height=430,width=420,status=yes,resizable=yes,menubar=no")
    : window.open("ventanasExternas/ventana_externa.html", `b4`, "height=300,width=600,status=no,resizable=yes,menubar=no,left=150px,scrollbars=no,titlebar=no,location=no,top=");
    arrayVentanas.push(ventana);
}

function abrirCompleta(){
    let ventana = window.open("ventanasExternas/ventana_externa.html", "pantalla-completa", "outerHeight=200,outerWidth=200,top=0,left=0");
    arrayVentanas.push(ventana);
}