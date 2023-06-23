// 6. Crea una aplicación que nos cuente el número de cifras de un 
// número entero positivo(hay que controlarlo) pedido por prompt. 
// Crea un método que realice esta acción, pasando el número por 
// parámetro devolverá el número de cifras.

let numero=prompt("Introduce un numero: ");

const cantidadDeCifras=(numero)=>{
    if (Number.isInteger(+numero) && numero>=0) {
        return "Numero de cifras: "+numero.length;
    } else {
        return "Numero no positivo";
    }
}
console.log(cantidadDeCifras(numero));
