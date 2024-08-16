export default function tiposDeDatos(a){
    //var a = 123 
    console.log(a) 
    console.log(`typeof: ${typeof(a)}`) 
        
    var a = String(a); //Aquí transformamos el tipo de dato. 
    console.log(a) 
    console.log(`typeof: ${typeof(a)}`) 

    var a = "456" 
    console.log(a) 
    console.log(`typeof: ${typeof(a)}`)
    
    var a = Number(a); //Aquí transformamos el tipo de dato. 
    console.log(a) 
    console.log(`typeof: ${typeof(a)}`) 
    
    var a = "true" 
    console.log(a) 
    console.log(`typeof: ${typeof(a)}`) 
    
    var a = 9007199254740991 
    console.log(a) 
    console.log(`typeof: ${typeof(a)}`) 
    
    var a = BigInt(a); //Aquí transformamos el tipo de dato. 
    console.log(a) 
    console.log(`typeof: ${typeof(a)}`) 
    
    var a = Boolean(a); //Aquí transformamos el tipo de dato. 
    console.log(a) 
    console.log(`typeof: ${typeof(a)}`) 
    
    var a = "hola" 
    console.log(a) 
    console.log(`typeof: ${typeof(a)}`) 
    
    var a = Symbol(a); //Aquí transformamos el tipo de dato. 

    console.log(a) 
    console.log(`typeof: ${typeof(a)}`) 
}


