import type Pokemon from "./types.js";

const urlApi = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
const getPokemon = async (_url: string) => {
  const response = await fetch(urlApi);
  const pokemon = (await response.json()) as Pokemon[];
  return pokemon;
};

console.log(getPokemon);

export default getPokemon;
