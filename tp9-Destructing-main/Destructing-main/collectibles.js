const fs = require('fs') 

const HotToys = require('./figuras1.json',  'utf-8');
const StarWars = require('./figuras3.json', 'utf-8');
const Bandai= require('./figuras2.json', 'utf-8');

function importarDatos(marca) {
    return marca
};

console.log(importarDatos(Bandai));

module.exports = {
    HotToys,
    Bandai,
    StarWars,
    importarDatos
};