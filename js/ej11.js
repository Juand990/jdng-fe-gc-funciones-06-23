// 11. Crea dos arrays de números con la dimensión pasada por teclado. 
// Uno de ellos estará rellenado con números aleatorios y el otro 
// apuntará al array anterior, reasigna los valores del segundo array con
// valores aleatorios. Después, crea un método que tenga como parámetros, 
// los dos arrays y devuelva uno nuevo con la multiplicación de la 
// posición 0 del array1 con el del array2 y así sucesivamente. 
// Por último, muestra el contenido de cada array.

let array1=[]; //aleatorios
let array2=array1; //array1
let dimension=prompt("Numero para tamaño");

const rellenarArray1=(dimension)=>{
    for (let i = 0; i < dimension; i++) {
        array1[i]=Math.floor(Math.random() * 10);        
    }
    return array1;
}
const reasignarArray2=()=>{
    for (let i = 0; i < array2.length; i++) {
        array2[i]=Math.floor(Math.random() * 10);        
    }
    return array2;
}
const multDeArrays=(array1,array2)=>{
    let array3=[];
    for (let i = 0; i < array1.length; i++) {
        array3[i]=array1[i]*array2[i];        
    }
    return array3;
}
rellenarArray1(dimension); //array1
console.log(array1);
console.log(array2);
reasignarArray2(); //array2
console.log(array2);
console.log(multDeArrays(array1,array2)); //array3


