let pagoMes = 12345;
let consumoKWH = 300;
let aumentoPago = pagoMes * 1.20
let mensaje = console.log(`Debido a que su hogar tuvo un consumo de 450kwh, enbase al ajuste tarifario (hogares con consumo mayor a 300kwh pormes tendrán un aumento del 20%), cumplimos con informarle que seha ajustado el total a pagar, que será de ${aumentoPago}`);
let aumento = (consumoKWH > 300) ? mensaje : pagoMes;


