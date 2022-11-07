import { Component, OnInit } from '@angular/core';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: []
})
export class ListPokemonComponent implements OnInit {

  // déclaration de propriétés
  pokemonList: Pokemon[] = POKEMONS;
  
  constructor() { }

  ngOnInit(): void {
  }

}
