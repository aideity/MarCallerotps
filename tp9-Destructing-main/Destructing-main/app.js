const doc = require('./collectibles');

doc.importarDatos(doc.HotToys);

let unifiedCollectibles = [...doc.HotToys, ...doc.Bandai, ...doc.StarWars];


let collectibles = {
    figura: unifiedCollectibles,

    listFigures: function() {
        this.figura.forEach(function(figura, index) {
            console.log(`${index + 1}.- ${figura.nombre}`); 
        });
    },

    figuresByBrand: function(brand) {
        return this.figura.filter(figura => figura.marca === brand);
    }
};
        
console.log(collectibles);

console.log("Todas las figuras:");
collectibles.listFigures();

console.log('Figuras de la marca HotToys');

console.log(collectibles.figuresByBrand('HotToys'));

console.log("Figuras de la marca 'Bandai':");
console.log(collectibles.figuresByBrand('Bandai'));

console.log("Figuras de la marca 'Star Wars':"); 
let starWarsFigures = collectibles.figuresByBrand('Star Wars'); 
console.log(starWarsFigures);
