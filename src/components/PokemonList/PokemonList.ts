import type Pokemon from "../../types.js";
import Component from "../Component/Component";

class PokemonList extends Component {
  constructor(
    parentElement: Element,
    private readonly pokemon: Pokemon[],
  ) {
    super(parentElement, "ul", "pokemon");
  }

  protected populate(): void {
    this.pokemon.forEach((_pokemon) => {
      const listElement = document.createElement("li");
      this.element.appendChild(listElement);
    });
  }
}

export default PokemonList;
