let numeros = new Array();
numeros=[1,5,3,9,8,7,4,6,8465];
/* document.write(numeros); */

for(let i = 0; i < numeros.length; i++ ){
/*     document.write("br")
    document.write(`${numeros[i]} `)
   
 */
}

numeros.forEach(function(numero){
  /*   document.write(numero) */
})

let numeros2 = numeros.map(function(elemento){

    return elemento;
})

let numerosPares = numeros.filter((elemento)=>{
    return elemento % 2 == 0;
});
console.log(numerosPares);