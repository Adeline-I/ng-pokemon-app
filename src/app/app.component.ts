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

  // déclaration de méthodes
  ngOnInit(): void {
    console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[0])
  }

  selectPokemon(pokemon: Pokemon) {
    console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);
  }
}
