// 8. Crea un array de 10 posiciones de números con valores pedidos
// por prompt. Muestra por consola el índice y el valor al que
// corresponde. Haz dos métodos, uno para rellenar valores y otro
// para mostrar.

let arrayNumeros = [];
const RellenarArray = (arrayNumeros) => {
  for (let i = 0; i < 10; i++) {
    let numero = prompt("Introduce un numero: ");
    arrayNumeros[i] = numero;
  }
};

const MostrarValoresArray = (arrayNumeros) => {
  for (let i = 0; i < arrayNumeros.length; i++) {
    console.log("Posicion: "+i+" = "+arrayNumeros[i]);
  }
};

RellenarArray(arrayNumeros);
MostrarValoresArray (arrayNumeros);
