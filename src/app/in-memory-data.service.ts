import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { POKEMONS } from './pokemon/mock-pokemon-list';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  // Simule une API Rest avec des opérations CRUD pour les données des pokémons
  // Simule comme si les données venaient du serveur
  createDb() {
    return { POKEMONS };
  }
}