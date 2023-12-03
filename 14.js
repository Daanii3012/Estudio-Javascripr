//Crea una función llamada evaluarCalificacion que tome una calificación como argumento y devuelva un mensaje según la siguiente escala:
const scanner = require ("prompt-sync")({ sigint: true })

let texto = scanner ("¿Que nota has sacado? -->")
evaluarCalificacion(texto)
function evaluarCalificacion (x) {
    if (x >= 90) {
        return console.log("A")
    } else if (x <= 89 && x >= 80){
        return console.log("B")
    } else if (x <= 79 && x >= 70) {
        return console.log("C")
    } else if (x < 70){
        return console.log("F")
    }
}

let calificaion = evaluarCalificacion(Number)