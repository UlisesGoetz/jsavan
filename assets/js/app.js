let title = document.getElementById('title');

console.log(title);
title.textContent='Esto viene desde js'

let parrafo = document.getElementsByTagName('p');
console.log(parrafo);
/* parrafo[0].textContent = 'Parrafo escrito desde js' 

/*Modificar todos los parrafos*/
/* for (let i = 0; i< parrafo.length; i++){
    parrafo[i].textContent = 'Parrafo escrito desde js ' + i;}  */

    let email =document.getElementById('email');
    let password = document.getElementById('password');
    function getInformation(){
        console.log(email.value);
        console.log(password.value);
    }
