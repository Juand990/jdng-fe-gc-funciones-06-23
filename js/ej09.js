// 9. Crea un array de números donde le indicamos por prompt el tamaño
// del array, rellenaremos el array con números aleatorios entre 0 y 9.
// Al final muestra por consola el valor de cada posición y la suma de
// todos los valores. //Tareas a realizar: Haz un método para rellenar
// el array(que tenga como parámetros los números entre los que tenga
// que generar) y otro para mostrar el contenido y la suma del array.

let arrayNumeros = [];
let tamañoArray = prompt("Un numero para el tamaño del array: ");

const rellenarArray = (arrayNumeros, tamañoArray) => {
  for (let i = 0; i < tamañoArray; i++) {
    arrayNumeros[i] = Math.floor(Math.random() * 10);
  }
};

const mostrarArrayConSuma = (arrayNumeros) => {
  let suma = 0;
  for (let i = 0; i < arrayNumeros.length; i++) {
    console.log(arrayNumeros[i]);
    suma = suma + arrayNumeros[i];
  }
  console.log("Suma: "+suma);
};

rellenarArray(arrayNumeros, tamañoArray);
mostrarArrayConSuma(arrayNumeros);
