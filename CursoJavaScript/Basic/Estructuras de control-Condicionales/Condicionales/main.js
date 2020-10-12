'use strict'

// Condicional IF
//  Si A es igual a B has algo

var edad1 = 30;
var edad2 =12;

// Si pasa esto
if(edad1 > edad2){    
    //Ejecuta esto
    console.log("Edad uno es mayor que edad2");
} else{
    console.log("La edad uno es inferior");
}

var edad = 34;
var nombre = "Alejandro Rivera"

/*
    Operadores relacionales
    Mayor: >
    Menor: <
    Mayor o igual: >=
    Menor o igual: <=
    Igual: ==
    Distinto: !=
*/

if(edad >= 18){
    //  Es mayor de edad
    console.log("Alejandro es mayor de edad");

    if(edad <= 33){
        console.log('Todavia eres millenial');
    }else{
        console.log("Ya no eres millenial");
    }
} else{
    //  Es menor de edad
    console.log("Alejandro es menor de edad");
}

/*
// Operadores logicos

AND(Y): &&
OR(O): ||
Negacion: !
*/

//  Negacion
var year = 2018;
if(year != 2016){
    console.log("El año no es 2016 realmente es: " + year);
}

//  AND
if(year >= 2000 && year <= 2020 ){
    console.log("Estamos en la era actual");
}else{
    console.log("Estamos en la era post moderna");
}

//  OR
if(year == 2008 ||( year>= 2018 && year ==2028)){
    console.log("El año acaba en 8");
}
else{
    console.log("no registrado");
}