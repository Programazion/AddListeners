console.log("Cargando Java Scritp E5");

//Pendiente validaciones IF
var form = document.getElementById("myForm");

form.addEventListener("submit", ValidarFormulario);


function ValidarFormulario(event){
    event.preventDefault();
    console.log("Ejecutando función validar")

    var inputName = document.getElementById('name');
    var inputEmail = document.getElementById('email');

    var valueName = inputName.value;
    var valueEmail = inputEmail.value;

    valueName = valueName.trim(); //elimina los espacios en blanco al inicio y fin de una cadena
    valueEmail = valueEmail.trim();


    valueName=valueName.replace("i", "1")
    
    if(valueName && valueEmail){
        alert("Datos Correctos, Información enviada !");

        alert("Nombre: "+ valueName+"<br>Correo:"+ valueEmail+"'")

    }else{
        alert("Error en los datos")

    }
}

//-------------------------------------------------


var container = document.getElementById("mainContainer");

container.addEventListener('mouseenter', ()=>{

    
    container.style.backgroundColor = "blue";
})

container.addEventListener('mouseleave', ()=>{
    
    container.style.backgroundColor = "yellow";
})



