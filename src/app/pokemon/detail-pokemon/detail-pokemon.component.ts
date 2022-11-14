import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

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

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    // router : accès au router
    // snapshot : obtenir la donnée à l'instant T
    // paramMap : tableau avec tout les paramètres de l'url à un instant T
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if (pokemonId) {
      this.pokemonService.getPokemonById(+pokemonId)
        .subscribe(pokemon => this.pokemon = pokemon);
    }
  }

  deletePokemon(pokemon: Pokemon) {
    this.pokemonService.deletePokemonById(pokemon.id)
      .subscribe(() => this.goToPokemonList());
  }

  goToPokemonList() {
    this.router.navigate(['/pokemons']);
  }

  goToEditPokemon(pokemon: Pokemon) {
    this.router.navigate(['/edit/pokemon', pokemon.id]);
  }
}
