// 10. Crea un array de números de un tamaño pasado por prompt, el
// array contendrá números aleatorios primos entre los números deseados,
// por último, nos indica cuál es el mayor de todos. Haz un método para
// comprobar que el número aleatorio es primo, puedes hacer todos los
// métodos que necesites.

let arrayNumeros = [];
let ArrayPrimos = [];
let posicion = 0;
let tamañoArray = prompt("Un numero para el tamaño del array: ");
let rangoMenorNum = prompt("Rango MENOR: ");
let rangoMayorNum = prompt("Rango MAYOR: ");

const esPrimo = (numero) => {
  let contador = 0;
  for (let i = 1; i <= numero; i++) {
    if (numero % i == 0) {
      contador++;
    }
  }
  if (contador == 2) {
    return numero;
  }
};
const RellenarArrayPrimos = (rangoMenorNum,rangoMayorNum) => {  
  for (let i = rangoMenorNum; i < rangoMayorNum; i++) {
    esPrimo(i);
    if (esPrimo(i)) {
      ArrayPrimos[posicion] = i;
      posicion++;
    }
  }
  return ArrayPrimos;
};
const CrearArrayDePrimos=(tamañoArray)=>{
    let tamañoArrPrimos=ArrayPrimos.length;
    for (let i = 0; i < tamañoArray; i++) {
        let posPrimo=Math.floor(Math.random() * tamañoArrPrimos);
        arrayNumeros[i]=ArrayPrimos[posPrimo];         
    }    
    return arrayNumeros;
}
const PrimoMayor=(arrayNumeros)=>{
    let mayor=arrayNumeros[0];
    for (let i = 1; i < arrayNumeros.length; i++) {
        if (arrayNumeros[i]>mayor) {
            mayor=arrayNumeros[i];
        }        
    }
    return "El mayor es: "+mayor;
}

console.log(RellenarArrayPrimos(rangoMenorNum,rangoMayorNum)); //ArrayPrimos  
console.log(CrearArrayDePrimos(tamañoArray));
console.log(PrimoMayor(arrayNumeros));





