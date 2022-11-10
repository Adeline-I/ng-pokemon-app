import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable(
  // Ici, avec {providedIn: 'root'}, notre service est disponible dans toute l'application
  // Ce service étant nécessaire uniquement dans le module pokemon, celui-ci est donc transféré à pokemon.module.ts
  // {providedIn: 'root'}
)
export class PokemonService {

  constructor(
    private http: HttpClient
  ) { }

  // On va recevoir une donnée qui va arriver dans le temps qui contient un tableau de pokémons
  // Suptilité synchrone / asynchrone : on ne retourne pas directement les pokémons car on ne les a pas à l'instant T, on va retourner un flux (Observable) qui lui contiendra les pokémons et qui arriveront plus tard dans le temps
  // On ne retourne plus une constante mais un flux qui contient les pokémons
  getPokemonList(): Observable<Pokemon[]> {
    // http renvoi des flux que l'on peut typer
    // On fait une requête http.get et on va recevoir un observable
    // On spécifie que la réponse contient une liste de Pokemon[]
    // En paramètre de la méthode get, on passe une url vers l'Api
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      // on définit ce que l'on veut faire en plus du traitement de la requête
      // loguer la réponse et intercepter les erreurs éventuelles
      // tap équivaut à un console.log pour un Observable
      tap((pokemonList) => console.table(pokemonList)),
      catchError((error) => {
        console.log(error);
        // On retourne un observable : tableau vide
        return of([]);
      })
      // Rend à disposition l'objet lorsque les composants vont l'appeller, qui pourront 'subscribe' pour récupérer les données qui sont contenus dans le flux 
    );
  }

  getPokemonById(pokemonId: number): Observable<Pokemon|undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((pokemon) => console.log(pokemon)),
      catchError((error) => {
        console.log(error);
        return of(undefined);
      })
    );
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
