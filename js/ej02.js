// 2. Crea una aplicación que nos genere una cantidad de números enteros
// aleatorios pasados por el usuario (prompt). Crea un método donde
// pasamos como parámetros entre qué números queremos que los
// genere, podemos pedirlas al usuario antes de generar los números.
// Este método devolverá un número entero aleatorio. Muestra estos
// números por consola.

let RangoMenor=prompt("Rango MENOR de los numeros: ");
let RangoMayor=prompt("Rango MAYOR de los numeros: ");

const mostrarAleatorios = (RangoMenor, RangoMayor) => {
  let cantidadDeNumeros = prompt("Cantidad de numeros Aleatorios: ");
  let numAleatorio = 0;
  for (let i = 0; i < cantidadDeNumeros; i++) {
    numAleatorio = Math.floor(Math.random() * (+RangoMayor - +RangoMenor + 1) ) + +RangoMenor;
    console.log(numAleatorio);
  }
};

mostrarAleatorios(RangoMenor,RangoMayor);
