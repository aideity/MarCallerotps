
let numberA = 45; 
let numberB = 74; 
let operation = "restar"; 

function calculadora(numero1, numero2, operacion) {
    let resultado;

    switch (operation.toLowerCase()) {
        case "sumar":
            resultado = numberA + numberB;
            console.log(`El resultado de sumar ${numberA} y ${numberB} es ${resultado}`);
            break;
        case "restar":
            resultado = numberA - numberB;
            console.log(`El resultado de restar ${numberB} a ${numberA} es ${resultado}`);
            break;
        case "multiplicar":
            resultado = numberA * numberB;
            console.log(`El resultado de multiplicar ${numberA} por ${numberB} es ${resultado}`);
            break;
        case "dividir":
                resultado = numero1 / numero2;
                console.log(`El resultado de dividir ${numberA} por ${numberB} es ${resultado}`);
            break;
        default:
            console.log("Las operaciones aceptadas son: sumar - restar - multiplicar - dividir");
            break;
    }
}

// Llamar a la función con los valores suministrados
calculadora(numberA, numberB, operation);
