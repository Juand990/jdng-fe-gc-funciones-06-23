// 3. Crea una aplicación que nos pida un número por prompt y con un 
// método se lo pasamos por parámetro para que nos indique si es o no 
// un número primo, debe devolver true si es primo sino false. 
// Un número primo es aquel que solo puede dividirse entre 1 y sí mismo. 
// Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, 
// sin embargo, 17 si es primo.

let numero=prompt("Introduce un numero: ");

const esPrimo=(numero)=>{
    let contador=0;
    for (let i = 1; i <= numero; i++) {
        if (numero%i==0) {
            contador++;
        }        
    }
    if (contador==2) {
        return true;
    }else{
        return false;
    }
}

console.log(esPrimo(numero));
