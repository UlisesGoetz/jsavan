function sumar(num1,num2){
    return num1+num2;
}
function resta(num1,num2){
    document.write(`la resta de ${num1} y ${num2} es ${num1 - num2} <br>`);
}
let num1 = parseInt(prompt('numero1'));
let num2 = parseInt(prompt('numero2'));
let suma = sumar(num1,num2);
document.write(`la suma de ${num1} y ${num2} es ${suma} <br>`);
resta(num1,num2);

const sumar = (num1,num2)=> {
    document.write(`la suma de flecha de ${num1} y ${num2} es ${num1 + num2} <br>`);
}


