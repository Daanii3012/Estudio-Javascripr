//Crea una función llamada obtenerLongitud que tome una cadena como argumento y devuelva la longitud de esa cadena.
const scanner = require ("prompt-sync")({ sigint: true })

let texto = scanner ("Escribe un texto -->")
obtenerLongitud (texto)
function obtenerLongitud (x) {
    console.log (x.length) 
    
}

