'use strict'

// Pruebas con let y var
var numero = 40;
console.log(numero); // valor 40

if(true){
    var numero = 50;
    console.log(numero); // valor 50
}

console.log(numero); // valor 50

//  Prueba con Let
var texto = "Curso de Js";
console.log(texto);

if(true){
    let texto = "Curos X"
    console.log(texto); // Valor Let
}

console.log(texto);