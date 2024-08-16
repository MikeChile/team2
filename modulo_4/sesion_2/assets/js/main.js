// - - - - main.js - - - - 

// importamos doblar y nombre. 
import {  
    doblar as duplicar, 
    nombre
} from "./utils.js"; 


document.getElementById('btnDoblar').addEventListener('click',()=>
{
      const cantidad = document.getElementById('cantidad').value;
      console.log(cantidad);
      //console.log(func(cantidad))
      console.log(duplicar(cantidad));
      console.log(nombre);
 
  
});


import {
    default as func  
} from "./clases-herencias/datos.js";
console.log(func(123));


import { hacerIteracion } from './generador.js';

const btnGenerador = document.getElementById("btnGenerador");
// Iniciar el proceso de interacion
btnGenerador.addEventListener('click', hacerIteracion) 





