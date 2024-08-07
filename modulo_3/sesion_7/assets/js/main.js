
//metodo para filtrar por todo una cadena
//String.replaceAll(ElementoPorRemplazar,remplazo)

//ejemplo
let str = `Hazlo funcionar, hazlo bien, hazlo rápido`;

console.log(str.replaceAll('hazlo','ABC'))

// expresión regular
//metodo para filtrar por todo una cadena sin importar si tiene mayusculas o no
let patron = /hazlo/gi;

//reemplazarmemos una palabra por algo especifico
console.log(str.replaceAll(patron, function (match) {
    if (match === 'Hazlo') return '1234';
    if (match === 'hazlo') return 'ABC';
}))

//reemplazar espacios
const stro = ' JavaScript ';

//reemplaza espacios al inicio
let resultado = stro.trimStart();

//reemplaza espacios al final
let resultado2 = stro.trimEnd();

//reemplaza espacios al inicio y al final
let resultado3 = stro.trimStart().trimEnd();

console.log({ str });
console.log({ resultado });
console.log({ resultado2 });
console.log({ resultado3 });

//EJERCICIO 2
//usamos _ para visualizar mejor los numero grandes, esto no implicara ningun cambio tecnico
const presupuestoAnual = 1_000_000_000;
console.log(presupuestoAnual);

//operador de fusión nula
const nombre = null ?? 'Aquiles';
console.log(nombre);
const edad = undefined ?? 84;
console.log(edad);
const colorFav = 'azul' ?? 'rojo';
console.log(colorFav);

//Cuando saludo es falsy
let saludo;
saludo ||= 'es falsy'
console.log(saludo)
//Cuando saludo es truthy
saludo = 'hola'
saludo ||= 'es truthy'
console.log(saludo)

let persona = {
    nombre: 'Alejando',
    apellido: 'Minor',
};

persona.apellido &&= 'Magno';
console.log(persona);
   
//iniciamos objeto dimensiones, y si no tiene ancho este sera uno predefinido
let dimensiones = {
    altura: 54.2
};
dimensiones.ancho ??= 33.7;
console.log(dimensiones);

//encadenamiento opcional
const pacienteVeterinario = {
    amo: 'Amanda Salamanca',
    mascota: {
    tipo: 'gato',
        nombre: 'Chispas'
    }
}

//nos mostrara el nombre correctamente
const nombreGato = pacienteVeterinario.mascota?.nombre;
//nos mostrara undefined porque no existe peso, sin el operador ? nos arrojara un error en consola
const pesoMascota = pacienteVeterinario.mascota.peso?.enKilos;
console.log(nombreGato)
console.log(pesoMascota)

const pacienteVeterinario2 = {
    amo: 'Amanda Salamanca',
    mascota: {
    tipo: 'gato',
    nombre: 'Chispas',
    mostrarVacunas: () => ['rabia', 'parvovirus', 'virus de la leucemia felina']
    }
};

//vizualisamos los metodos y que muestra si uno existe o no
   // Éste método si existe
   console.log(pacienteVeterinario2.mascota.mostrarVacunas?.())
   // Éste método NO existe
   console.log(pacienteVeterinario2.mascota.registrarVacunas?.())