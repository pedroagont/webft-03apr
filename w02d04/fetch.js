console.log('Hello from fetch.js! 👋');

fetch('https://pokeapi.co/api/v2/pokemon')
  .then((res) => res.json())
  .then((data) => data.results)
  .then((pokemon) => console.log(pokemon));

fetch('./file.txt')
  .then((res) => res.text())
  .then((data) => console.log(data));

Promise.all([
  fetch('https://pokeapi.co/api/v2/pokemon').then((res) => res.json()),
  fetch('https://swapi.dev/api/people').then((res) => res.json()),
  fetch('https://rickandmortyapi.com/api/character').then((res) => res.json()),
]).then((all) => console.log('all', all));

Promise.race([
  fetch('https://pokeapi.co/api/v2/pokemon').then((res) => res.json()),
  fetch('https://swapi.dev/api/people').then((res) => res.json()),
  fetch('https://rickandmortyapi.com/api/character').then((res) => res.json()),
]).then((winner) => console.log('winner', winner));
