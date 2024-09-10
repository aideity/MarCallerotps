let perfil = "Asistente";

let perfilLowerCase = perfil.toLowerCase();

if (perfil === "") {
    console.log("Debe especificar el perfil del usuario");
} else if (perfilLowerCase === "administrador") {
    console.log("Usted tiene todos los privilegios de uso del sistema");
} else if (perfilLowerCase === "asistente") {
    console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos");
} else if (perfilLowerCase === "invitado") {
    console.log("Usted sólo tiene permisos de consultar datos");
} else {
    console.log("Debe especificar un perfil válido");
}