let tipodeVehículo = "CAMIONETA";
let díasdeAlquiler = 5;
let sillaparaBebé = false;


function alquilerVehiculo(tipodeVehículo, díasdeAlquiler, sillaparaBebé) {
    let costoporDía;
    switch (tipodeVehículo.toLowerCase()) {
        case "compacto":
            costoporDía = 14000
            break;
            case "mediano":
            costoporDía = 17000
            break;
            case "camioneta":
            costoporDía = 28000
            break;
        default:
            console.log("Tipo de vehículo no válido");
            break;
    }
let costoTotal;
if (sillaparaBebé) { costoTotal = (costoporDía + 1200) * díasdeAlquiler;
} else  {costoTotal = costoporDía * díasdeAlquiler};
 let mensaje;
 if (sillaparaBebé) {mensaje = `Estimado cliente: en base al tipo de vehículo ${tipodeVehículo} alquilado, considerando los ${díasdeAlquiler} días utilizados
 y la silla de bebé teniendo un costo de $${díasdeAlquiler*1200}, el monto total a pagar es de $${costoTotal}`   
 } else{mensaje = `Estimado cliente: en base al tipo de vehículo ${tipodeVehículo} alquilado, considerando los ${díasdeAlquiler} días utilizados
  el monto total a pagar es de $${costoTotal}`};
return mensaje
};

console.log(alquilerVehiculo(tipodeVehículo, díasdeAlquiler, sillaparaBebé));