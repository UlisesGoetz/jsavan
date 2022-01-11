const fecha = new Date();
let ano = fecha.getFullYear();

/*Obtener la edad*/
let edad = document.getElementById('edad');

/*mandar mensaje*/
function  getInformationnombre(){
let edadtext = document.getElementById('edadtext')
edadtext.textContent= "El año que naciste fue: " + (ano - edad.value)
alert( "El año que naciste fue: " + (ano - edad.value));

}

