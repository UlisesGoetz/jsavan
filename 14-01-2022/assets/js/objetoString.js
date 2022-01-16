let cadena1 ='Hola';
console.log(cadena1);

let cadena2 = new String('Adios');
console.log(cadena2);
console.log(cadena2.toLowerCase().includes('a'));

//convierte a minusculas o mayusculas
console.log(cadena2.toLowerCase());
console.log(cadena2.toUpperCase());

console.log(cadena1.toLowerCase());


let palabra = "Hola Mundo";
let arreglo = palabra.split("");
console.log(arreglo);

let arregloInvertido = arreglo.reverse();
console.log(arregloInvertido);
console.log(arregloInvertido.reverse());



function invertirPalabra(cadena) {
    let arreglo = cadena.split(""); //convitiendo la cadena en un arreglo
    arreglo.reverse(); //invirtiendo el arreglo
    let cadenaInvertida = arreglo.join(""); //une los elementos de un arreglo
    return console.log(cadenaInvertida);
}

invertirPalabra("Generetion");




    