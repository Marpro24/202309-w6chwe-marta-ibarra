import mockFetch from "../mockFetch";
import { getPokemonApi } from "./getPokemonApi";
import mockData from "../mockData.json";

describe("Given a getPokemonApi function", () => {
  describe("When it receives a pokemon API", () => {
    test("Then it should return a goldeen pokemon", async () => {
      const urlApi = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=";
      const pokemonOffset = 10;
      const pokemonName = "goldeen";
      window.fetch = mockFetch(mockData);

      const pokemonInfo = await getPokemonApi(urlApi, pokemonOffset);

      expect(pokemonInfo.results[7].name).toBe(pokemonName);
    });
  });
});
