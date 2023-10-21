import type Pokemon from "./types.js";

const urlApi = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

const respone = await fetch(urlApi);
const pokemon = (await respone.json()) as Pokemon[];

console.log(pokemon);
