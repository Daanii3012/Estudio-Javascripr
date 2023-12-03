//Crea una función llamada saludar que tome un nombre como argumento y devuelva un saludo.
const scanner = require ("prompt-sync")({ sigint: true })


 let frase = scanner ("dame un nombre -->")
function saludar (nombre){
    console.log("Buenos días " + nombre )
}

saludar ("dani")