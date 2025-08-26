const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
  { name: "Spirited Away", durationInMinutes: 80 },  
  { name: "The Matrix", durationInMinutes: 136 },  
  { name: "Amélie", durationInMinutes: 110 },  
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];

const smallMovies = [];
const mediumMovies = [];
const largeMovies = [];

for (let i = 0; i < movies.length; i++) {
  if (movies[i].durationInMinutes < 100) {
    smallMovies.push(movies[i]);
  } else if (movies[i].durationInMinutes >= 100 && movies[i].durationInMinutes < 200) {
    mediumMovies.push(movies[i]);
  } else {
    largeMovies.push(movies[i]);
  }
}

console.log("Películas pequeñas:", smallMovies);
console.log("Películas medianas:", mediumMovies);
console.log("Películas grandes:", largeMovies);