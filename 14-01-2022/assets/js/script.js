

let operacion = 3 * 5 + (10 - 5);

document.write(operacion);

let operacion2 = 3 - 5 / 2 * 4;

document.write('<br>' + operacion2);




document.write('<br>' + (7 < 7));
document.write('<br>' + (7 <= 7));
document.write('<br>' + (7 == '7')); 
document.write('<br>' + (7 === '7')); 

document.write('<br>' + (7 != '7'));  
document.write('<br>' + (7 !== '7')); 



let incremento = 5;
incremento += 5;  
document.write('<br>' + incremento);  //10

incremento -= 5;
document.write('<br>' + incremento);  //5

incremento *= 5;
document.write('<br>' + incremento);  //25

incremento /= 5;
document.write('<br>' + incremento);  //25

let sumar = 0;
document.write('<br>' + sumar); // 0
sumar ++;
document.write('<br>' + sumar); // 1
sumar ++;
document.write('<br>' + sumar); // 2

sumar --;
sumar --;
document.write('<br>' + sumar); // 0
sumar --;
document.write('<br>' + sumar); // -1




for (let i = 0; i < 10; i++){
    //document.write('<br>' + i);
}



let num = 5;
document.write('<br>' + (num++));  // 5
document.write('<br>' + (++num));  // 7

for (let i = 0; i < 5; i++) {
    // iteracion
    // primer ietracion, se detiene
    document.write('<br>' + 'Este es el ciclo padre.' + '<br>');
    for(let j = 0; j < 5; j++){
        // hace sus iteraciones(repeticiones) propias
        document.write('<br>' + 'Este es el ciclo hijo.');
    }
}