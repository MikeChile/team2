// - - - - utils.js - - - - 

function doblar(x) { 
    let duplicar = x * 2;
    const resultado = document.getElementById('resultado');
    resultado.innerHTML= duplicar;
    return duplicar;
}
const nombre = 'Alex'; 

//Así exportamos más de un elemento: 
export { 
    nombre, 
    doblar 
};
 
/*
export default function doblar(x) {
    let duplicar = x * 2;
    const resultado = document.getElementById('resultado');
    resultado.innerHTML= duplicar;
    return duplicar;
}*/