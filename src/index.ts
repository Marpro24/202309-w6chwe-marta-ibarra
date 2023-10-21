import { getPokemonApi } from "./getPokemonApi/getPokemonApi.js";

const urlApi = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";
const pokemonOffset = 20;

const pokemons = await getPokemonApi(urlApi, pokemonOffset);

export default pokemons;
