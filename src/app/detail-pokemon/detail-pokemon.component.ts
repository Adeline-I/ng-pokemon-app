import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: []
})
export class DetailPokemonComponent implements OnInit {

  // Ajout de propriétés
  pokemonList: Pokemon[];
  // pokemon courrent qui sera demandé dans l'url (id)
  pokemon: Pokemon|undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // A l'initialisation, pokemonList va valoir POKEMONS
    this.pokemonList = POKEMONS;

    // router : accès au router
    // snapshot : obtenir la donnée à l'instant T
    // paramMap : tableau avec tout les paramètres de l'url à un instant T
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');

    if (pokemonId) {
      this.pokemon = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
    }
  }

}
