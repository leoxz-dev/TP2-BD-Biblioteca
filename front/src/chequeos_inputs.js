let email = "hola@gmail.com";
//let emailRecibido = document.getElementById('email').value;
let boton = document.getElementById('tipoboton');

boton.addEventListener('click', (event)=>{
    event.preventDefault();
    validarEmail(emailRecibido);
} )

function validarEmail(email){
    const regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
}