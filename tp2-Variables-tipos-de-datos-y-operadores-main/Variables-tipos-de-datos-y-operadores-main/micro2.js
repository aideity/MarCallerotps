let name = "Pepe";
let surname = "Juarez";
let actualSalary =200000;
let Increse = 20;

let calculoSueldo = (actualSalary * Increse)/100; 

let nuevoSueldo = calculoSueldo + actualSalary;

console.log(`Hola, estimad@ ${name} ${surname}
En base a su sueldo actual:
$${actualSalary}
Ha recibido un aumento del ${Increse}%:
$${calculoSueldo}
y su nuevo sueldo es de: $${nuevoSueldo}`);