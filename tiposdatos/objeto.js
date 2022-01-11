let persona = {
     nombre : "nombre",
     edad: 20,
     direccion: "direccion"


     }
     console.log(persona)

     let casa = {
         pintura: "blanca",
         cuartos: 8,
         direccion:["mexico","coatzacoalcos",10],
        puedoVivirConTigo: function puedoviircontigo  (name){
             return name + " no puedes vivir con migo";
         }
     }
     console.log(casa.puedoVivirConTigo("tu nombre"))