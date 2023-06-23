// 1. Crea una aplicación que nos calcule el área de un
// círculo, cuadrado o triángulo.Pediremos al usuario que figura
// queremos calcular su área y según lo introducido pedirá los valores
// necesarios para calcular el área. Para ello has de crear un método
// por cada figura para calcular cada área, este devolverá un número
// real. Muestra el resultado por consola.
// Aquí te mostramos que necesita cada figura:
// • Circulo: (radio^2)*PI
// • Triangulo: (base * altura) / 2
// • Cuadrado: lado * lado

let tipoFigura = prompt("Figura: (circulo/triangulo/cuadrado):");

switch (tipoFigura) {
  case "circulo":
    let radio = prompt("Valor del radio del circulo: ");
    const circulo = (radio) => {
      let area = Math.pow(radio, 2) * 3.1416;
      return area;
    };
    console.log(circulo(radio));
    break;
  case "triangulo":
    let base = prompt("Valor para Base: ");
    let altura = prompt("Valor para Altura: ");
    const triangulo = (base, altura) => {
      let area = (base * altura) / 2;
      return area;
    };
    console.log(triangulo(base, altura));
    break;
  case "cuadrado":    
    let lado = prompt("Valor para Lado: ");
    const cuadrado = (lado) => {
      let area = lado * lado;
      return area;
    };
    console.log(cuadrado(lado));
    break;
  default:
    console.log("Figura No valida.");
    break;
}
