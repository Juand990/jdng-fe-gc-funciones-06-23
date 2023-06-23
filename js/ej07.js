// 7. Crea una aplicación que nos convierta una cantidad de euros
// introducida por prompt a otra moneda, estas pueden ser a dólares,
// yenes o libras. El método tendrá como parámetros, la cantidad de
// euros y la moneda a pasar que será una cadena, este no devolverá
// ningún valor, mostrará un mensaje indicando el cambio.
// El cambio de divisas es:
// • 0.86 libras es un 1 €
// • 1.28611 $ es un 1 €
// • 129.852 yenes es un 1 €

let euros = prompt("Introduce cantidad a cambiar: ");
let tipoCambio = prompt(
  "Escribe INICIAL de moneda (D->dolares, Y->yenes, L-libras)"
);

const CamioDivisa = (euros, tipoCambio) => {
  switch (tipoCambio) {
    case "D":
      console.log(1.28611*euros+" Dolares");
      break;
    case "Y":
      console.log(129.852*euros+" Yenes");
      break;
    case "L":
      console.log(0.86*euros+" Libras");
      break;

    default:
        console.log("Tipo divisa Erroneo");
      break;
  }
};

CamioDivisa(euros, tipoCambio);
