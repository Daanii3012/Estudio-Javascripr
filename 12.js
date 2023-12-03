//Crea una función llamada sumar que tome dos números como parámetros y devuelva su suma.
const scanner = require ("prompt-sync")({ sigint: true })

let dameNumero1 = scanner ("Dame un numero -->")
let dameNumero2 = scanner ("Dame otro numero -->")

function sumar (x, y) {
    if (x + y) {
        return console.log (Number(dameNumero1) + Number(dameNumero2))
    }
}
let numero = sumar(Number, Number)
