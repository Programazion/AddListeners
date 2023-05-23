console.log("Loading Javascript Ejemplo 3")


function cambiarColor(){

    var myPar = document.getElementsByName('pujjn');

    myPar[0].style.color = "blue";
}

function saludar(){
    console.log("saludo")
    alert("saludo!!!");
}


var buttonSL = document.getElementById("btnSaludar2")

buttonSL.addEventListener("click", saludar);