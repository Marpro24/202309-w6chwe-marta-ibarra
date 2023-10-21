export interface PokemonData {
  count: number;
  next: undefined;
  previous: string;
  results: ResultPokemonData[];
}

export interface ResultPokemonData {
  name: string;
  url: string;
}
