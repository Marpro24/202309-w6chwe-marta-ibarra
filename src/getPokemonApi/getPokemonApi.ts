import { type PokemonData } from "../types";

export const getPokemonApi = async (
  urlApi: string,
  pokemonOffset: number,
): Promise<PokemonData> => {
  const response = await fetch(`${urlApi}${pokemonOffset}`);
  const pokemonData = (await response.json()) as PokemonData;

  return pokemonData;
};
