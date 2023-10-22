import type { PokemonData } from "../../types.js";
import Component from "../Component/Component";

class PokemonList extends Component {
  constructor(
    parentElement: Element,
    private readonly pokemon: PokemonData[],
  ) {
    super(parentElement, "ul", "pokemon-list");
  }

  protected populate(): void {
    this.pokemon.forEach((_pokemon) => {
      const listElement = document.createElement("li");
      this.element.appendChild(listElement);
    });
  }
}

export default PokemonList;
