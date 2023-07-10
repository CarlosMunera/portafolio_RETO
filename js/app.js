const nombre = document.querySelector("#name");
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");
const form = document.querySelector(".contacto__formulario");
const parrafo = document.querySelector(".contacto__formulario_warning")


form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    let warnings = "";
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    let entra = false;
    parrafo.innerHTML = "";
    if (nombre.value.length < 6) {
        warnings += `* Campo nombre no válido, debe tener más de 6 caracteres. <br>`;
        entra = true;
    }
    if (!regexEmail.test(email.value)) {
        warnings += `* Campo E-mail no tiene un formato válido, Ej: nombre@dominio.com. <br>`;
        entra = true;
    }
    if (asunto.value.length < 1) {
        warnings += `* Campo Asunto no válido, no debe estar vacío. <br>`;
        entra = true;
    }
    if (mensaje.value.length < 1) {
        warnings += `* Campo Mensaje no válido, no debe estar vacío. <br>`;
        entra = true;
    }
    if (entra) {
        parrafo.innerHTML = warnings;
    } else {
        parrafo.innerHTML = "¡ Mensaje Enviado !";
        nombre.value = "";
        email.value = "";
        asunto.value = "";
        mensaje.value = "";
    }
});