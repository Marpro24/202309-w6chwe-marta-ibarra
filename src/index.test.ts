import { mockFetch } from "./mockFetch/mockFetch.js";
import getPokemon from "./index.js";
import mockData from "./mockFetch/mockData.json";

describe("Given a getPokemons function", () => {
  describe("When it receives a pokemon API", () => {
    test("Then it should return a hoothoot pokemon", async () => {
      const urlApi = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";
      const pokemonName = "hoothoot";
      window.fetch = mockFetch(mockData);

      const pokemonInfo = await getPokemon(urlApi);

      expect(pokemonInfo.results[3].name).toBe(pokemonName);
    });
  });
});
