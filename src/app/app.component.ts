// Un composant est une classe (logique du composant, propriétés et méthodes) + une vue (template)
import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

// Utilisation de l'importation Component sous la forme d'un décorateur avec @ qui va permettre de construire un composant web
@Component({
  // selector permet de donner un nom (avec balise html personnalisée) au composant afin de l'identifier par la suite
  selector: 'app-root',
  // template permet de définir le code html
  // template: `
  //     <h1>
  //       Liste de Pokémons
  //     </h1>
  // `,
  templateUrl:'./app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  // déclaration de propriétés
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon|undefined;

  // déclaration de méthodes
  ngOnInit(): void {
    console.table(this.pokemonList);
  }

  selectPokemon(pokemonId: string) {
    // '+' équivaut à la conversion 'number'
    const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
    if (pokemon) {
      console.log(`Vous avez demandé le pokémon ${pokemon.name}.`);
      this.pokemonSelected = pokemon;
    } else {
      console.log(`Vous avez demandé un pokémon qui n'existe pas.`);
      this.pokemonSelected = pokemon;
    }
  }
}
