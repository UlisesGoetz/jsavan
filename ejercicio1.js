let title = document.getElementById('nombre');

title.style.visibility="hidden";

function  getInformationnombre(){
    title.style.visibility="visible";
}

let nombretext =document.getElementById('nombretext');

function getInformation(){
    if(nombretext.value==""){
        alert("No hay texto") 
    }else{
    console.log(nombretext.value)
    let title = document.getElementById('title');
    title.textContent= "Hola " + nombretext.value
    }
}