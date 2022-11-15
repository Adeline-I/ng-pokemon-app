import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styles: []
})
export class SearchPokemonComponent implements OnInit {

  // Subject permet de stocker (dans un tableau de chaîne de caractères) les recherches successives (flux de données) de l'utilisateur qu'il réalise dans le champs de recherche
  // ex: {..."a"..."ab"..."abz"..."ab"..."abc"......}
  searchTerms = new Subject<string>();
  // Observable ne peut être que consommé (avec Subscribe) pour recevoir des données dans le temps
  // Ici, on veut piloter un Observable (avec Subject) : permet de construire un flux de données et afficher en "miroir" les résultats qui correspondent à la recherche
  // ex: {...pokemonList(a)...pokemonList(ab)......}
  // Lorsqu'une variable contient un flux de données, on ajoute un $ à la fin (il s'agit d'une convention non obligatoire)
  pokemons$: Observable<Pokemon[]>;

  constructor(
    private router: Router,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      // Nettoyage des 'term' de recherche de l'utilisateur
      // Temps d'attente avant d'effectuer une requête
      debounceTime(300),
      // Attend un changement dans les 'term' de recherche avant d'effectuer une requête
      distinctUntilChanged(),
      // Après le nettoyage, on sollicite le serveur
      // A chaque fois que l'utilisateur va lancer une nouvelle recherche, on veut annuler la dernière recherche en cours et effectuer la recherche la plus récente
      // switchMap : permet de renvoyer directement la pokemonList au lieu d'un Observable contenant la pokemonList
      switchMap((term) => this.pokemonService.searchPokemonList(term))
    );
  }

  search(term: string) {
    // next: permet de pousser le 'term' de recherche que l'utilisateur a tapé (équivaut à 'push' pour un tableau mais avec un flux de données)
    this.searchTerms.next(term);
  }

  goToDetail(pokemon: Pokemon) {
    const link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }

}
