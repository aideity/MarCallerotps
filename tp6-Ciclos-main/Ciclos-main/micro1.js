let movimientos = [400000, -23000, 3400,-1000];

function totalMovimientos(array) {
    let sumadeRetiros = 0;
    let sumadeDepositos = 0;
  
        for (let i = 0; i < array.length; i++) {
    if (array[i]<0) {
        sumadeRetiros += array[i];
    } else {sumadeDepositos += array[i] }
    };    
    let saldoFinal = sumadeRetiros + sumadeDepositos;
    return {
      sumadeDepositos,
     sumadeRetiros,
      saldoFinal}
};

    function calculodeMovimientos(array, callback) {
return callback(array)};

let resultado = calculodeMovimientos(movimientos, totalMovimientos);

console.log(`Estimada Gloria Medina:
El monto total de los depósitos es de: $${resultado.sumadeDepositos}.
El monto total de los retiros es de: $${resultado.sumadeRetiros}.
Por lo tanto, su saldo actual en la cuenta es de: $${resultado.saldoFinal}.`);

