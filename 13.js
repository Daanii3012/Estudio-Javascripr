//Crea una función llamada esNumeroPar que tome un número como argumento y devuelva true si es par y false si es impar.
const scanner = require ("prompt-sync")({ sigint: true })

let texto = scanner ("Escribe un numero -->")

while (texto != "salir") {
    EsNumeroPar(texto)
    validar(texto)
    texto = scanner ("Escribe un numero -->")
}


function EsNumeroPar (x) {
    if (x%2 == 0) {
        console.log("Este numero es par")
    } else {
        console.log("Este numero no es par")
    }
 }

 function validar (i) {
    if (Number(i)) {
        console.log("Es un numero")
    } else if (i != Number){
        console.log("No es un numero")
    }
 }

 //let numero = validar(Number)
