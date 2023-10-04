//funcionamiento para que aparezca el boton buscar
let inputBuscar = document.getElementById("input__mostrar");
let btnInputMostrar = document.getElementById("lupita");

var estado = false

btnInputMostrar.addEventListener("click", ()=>{
    inputBuscar.classList.toggle("claseMostrar")
} )

