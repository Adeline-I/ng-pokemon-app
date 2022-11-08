import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Injectable(
  // Ici, avec {providedIn: 'root'}, notre service est disponible dans toute l'application
  // Ce service étant nécessaire uniquement dans le module pokemon, celui-ci est donc transféré à pokemon.module.ts
  // {providedIn: 'root'}
)
export class PokemonService {

  constructor() { }

  getPokemonList(): Pokemon[] {
    return POKEMONS;
  }

  getPokemonById(pokemonId: number): Pokemon|undefined {
    return POKEMONS.find(pokemon => pokemon.id == pokemonId);
  }

  getPokemonTypeList(): string[] {
    return [
      'Plante', 
      'Feu', 
      'Eau', 
      'Insecte', 
      'Normal', 
      'Electrik', 
      'Poison', 
      'Fée', 
      'Vol', 
      'Combat', 
      'Psy'
    ];
  }
}
