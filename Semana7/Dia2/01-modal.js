let btnModal = document.getElementById("btn-modal");

let miModal = document.getElementById("miModal");

// console.log("brnModal", btnModal);

// console.log("miModal", miModal);

let bsModal = new bootstrap.Modal(miModal);

// console.log("bsModal", bsModal);

btnModal.addEventListener("click", function(){
    //mas codigo

    bsModal.show()
})

//ejecuta una funcion despues de X tiempo
//setTimeout(functionAEjecutar, tiempo_en_ms)
window.setTimeout(function(){
    bsModal.show()
}, 3000)