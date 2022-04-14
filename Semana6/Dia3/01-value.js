let divContenido = document.getElementById("contenido");

divContenido.innerHTML = `<h1>Eventos y value</h1>
                            <input
                                type="text"
                                id="input_nombre"
                                >`

let inputNombre = document.getElementById("input_nombre");
//let input = document.createElemnt("input")
//input.setAttribute("type","number")
// input.setAttribute("placeholder","Escribe aquí...")
//divContenido.appendChild(input)

inputNombre.setAttribute("placeholder","Ingrese su Nombre");

//input, select, textarea
//evento change
//elent.addEventListener("evento", function(){})
inputNombre.addEventListener("change", function(evento){
    //recordemos que el evento tambien es un objeto
    //.target del evento, se refiere desde donde esta disparando el evento
    console.log(evento.target)
    console.log(evento.target.value)
})


let btn = document.createElement("button")
btn.innerHTML = "obten el valor!"
divContenido.appendChild(btn)

btn.addEventListener("click", function(){
    console.log(inputNombre.value)
})