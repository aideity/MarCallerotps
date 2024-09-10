let electrodomesticos = ["lavadora", "microondas","notebook", "netbook", "batidor", "heladera"];

console.log(electrodomesticos.length); // 6
console.log(electrodomesticos[2]); // notebook
let sacarElectrodomesticos = electrodomesticos.shift();
let ponerElectrodomesticos = electrodomesticos.push("lavadora");
let newElectrodomesticos = electrodomesticos.unshift("PC", "vaporera");
console.log(electrodomesticos.length); // 8

function electrodomesticosDisponibles(electrodomestico) {
    switch (true) {
        case electrodomesticos.includes(electrodomestico):
            return "Producto encontrado";
        default:
            return "El producto buscado no existe";
    }
}

console.log(electrodomesticosDisponibles("lavadora"));

let unirElectrodomesticos = electrodomesticos.join(" ");
console.log(unirElectrodomesticos);
console.log(unirElectrodomesticos.length);

let nuevaCadena = unirElectrodomesticos.replace("notebook", "tablet");


console.log(electrodomesticos);

let separarCadena = unirElectrodomesticos.split(" ");
console.log(separarCadena);