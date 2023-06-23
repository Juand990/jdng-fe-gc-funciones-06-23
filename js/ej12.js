// 12. Crea un array de números de un tamaño pasado por prompt, el array 
// contendránúmeros aleatorios entre 1 y 300 y mostrará aquellos números 
// que acaben en un dígito que nosotros le indiquemos por prompt 
// (debes controlar que se introduce un número correcto), estos deben 
// guardarse en un nuevo array. Por ejemplo, en un array de 10 posiciones 
// le indicamos mostrar los números acabados en 5, 
// podría salir 155, 25, etc.

let array1=[]; //aleatorios
let dimension=prompt("Numero para tamaño");

const rellenarArray=(dimension)=>{
    for (let i = 0; i < dimension; i++) {
        array1[i]=Math.floor(Math.random() * 300)+1;        
    }
    return array1;
}
const mostrarNumerosIndicados=(array1)=>{
    let numero=prompt("Numeros acabados en...:");    
    let array3=[];
    if (!Number.isInteger(+numero)) {
        return "Rango no valido";
    }
    if (numero>=0 && numero<=9) {        
        for (let i = 0; i < array1.length; i++) {
            if (array1[i].toString().endsWith(numero)) {
                array3.push(array1[i]);
            }
        }
        return array3;
    }else{
        return "Rango no valido";
    }
}

console.log(rellenarArray(dimension));  
console.log(mostrarNumerosIndicados(array1));  

