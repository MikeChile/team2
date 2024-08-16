//EJERCICIO 2 GENERADORES

// Arreglo de frutas 
let frutas = ['manzana', 'naranja', 'pera', 'frutilla', 'kiwi'] 

//Declaración de un generador con function* 
function* generador() { 
    let i = 0 
    yield frutas[i]; //Palabra clave yield: pone la función en pausa. 
    i++ 
    yield frutas[i]; 
    i++ 
    yield frutas[i]; 
    i++ 
    yield frutas[i]; 
    i++ 
    yield frutas[i]; 
    i++ 
    return 'terminado...'; 
} 

//Instanciamos el generador
let gen = generador(); 
let item = 0;

// function hacer iteracion
export function hacerIteracion() {

    const iteracion = gen.next();

    // condicion se cumple si iteracion.done es distinto de true
    if (!iteracion.done) {
        let nuevaFila = document.createElement('tr');
          // Muestra el valor actual del generador
        nuevaFila.innerHTML = `
            <td>${item}</td>
            <td>${iteracion.value}</td>`;

        document.getElementById('tablaResultados').appendChild(nuevaFila);
        item++;
        // muestra iteracion en consola
        console.log(iteracion); 
        setTimeout(() =>
        {
            hacerIteracion(gen);
        }, 2000); // Llama a la función de nuevo después de 1 segundo
            
    } else {
        console.log(iteracion);
        console.log(iteracion.value); // Muestra 'terminado...' cuando el generador ha terminado
    }
}







