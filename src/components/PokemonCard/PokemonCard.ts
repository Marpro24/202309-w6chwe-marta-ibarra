import Component from "../Component/Component.js";
import { type ResultPokemonData } from "../../types.js";
class PokemonCard extends Component {
  constructor(
    parentElement: Element,
    private readonly resultPokemonData: ResultPokemonData,
  ) {
    super(parentElement, "section", "card-section");
  }

  protected populate(): void {
    this.element.innerHTML = `
<div class="pokemon-item">
<span class="pokemon-name">${this.resultPokemonData.name}</span>
`;
  }
}

export default PokemonCard;
