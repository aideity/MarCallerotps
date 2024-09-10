let movies =  ['Turno de día', '30 noches con mi ex', 'Bestia', 'El monte', 'Top gun maverick','Elvis','Thor: amor y trueno'];

let pelicula = 'Thor: amor y trueno';
function mayus(peli) {
    let peliculaMayus = pelicula.toUpperCase();
    return peliculaMayus
}; // revisar bien esta parte y por qué no funciona 
let moverThor = movies.pop();
let lamejorPeli = movies.unshift(mayus(pelicula));

console.log(mayus(pelicula));

let newMovies = ['Counter-Strike', 'NOP', 'Vértigo', 'Nick', 'Avatar'];
let errorMovies = newMovies.shift();

console.log(errorMovies);
console.log(newMovies);

function concatenacióndePeliculas(peliculas1, peliculas2) {
    return peliculas1.concat(peliculas2)
};

let todaslasPeliculas = concatenacióndePeliculas(movies, newMovies)

console.log(todaslasPeliculas);
