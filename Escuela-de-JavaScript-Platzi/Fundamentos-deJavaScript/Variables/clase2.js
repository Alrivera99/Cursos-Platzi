'use strict'
//  Varibles String

var nombre = 'Sacha', apellido = 'Lifszync';

var nombreEnMayusculas = nombre.toUpperCase();
var apellidoEnMinusculas = apellido.toLowerCase();

var primeraLetraDelNombre = nombre.charAt(0);
var cantidadDeLetrasDelNombre = nombre.length

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`;

console.log(nombreCompleto);

var str = nombre.substr(1,2);

console.log(str);
