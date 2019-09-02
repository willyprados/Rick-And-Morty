// RickAndMorty
// let masterURL = 'https://rickandmortyapi.com/api/'
/*let page = "https://rickandmortyapi.com/api/"
if (page) {
  "characters": "https://rickandmortyapi.com/api/character",
  "locations": "https://rickandmortyapi.com/api/location",
  "episodes": "https://rickandmortyapi.com/api/episode"
} */

fetch('https://rickandmortyapi.com/api/character')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson);
    });

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

console.log(getRandomInt(494));
// expected output: 0, 1 or 2

console.log(getRandomInt(3));
// expected output: 0

console.log(Math.random());
// expected output: a number between 0 and 1








let img1 = document.getElementById('img1')
let img2 = document.getElementById('img2')
let img3 = document.getElementById('img3')

// img1.src = 'https://rickandmortyapi.com/api/character/'
// img2.src = 'https://rickandmortyapi.com/api/character/'
// img3.src = 'https://rickandmortyapi.com/api/character/'