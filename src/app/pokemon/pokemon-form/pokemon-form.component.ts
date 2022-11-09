import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: [
    './pokemon-form.component.css'
  ],
  styles: []
})
export class PokemonFormComponent implements OnInit {

  // PokemonFormComponent est un outil permettant d'ajouter ou éditer un pokémon
  // On défini une propriété pour le composant : lorsque l'on veut utiliser app-pokemon-form, on doit passer une propriété d'entrée Pokemon
  @Input() pokemon: Pokemon;

  types: string[];

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // pokemonTypeList
    this.types = this.pokemonService.getPokemonTypeList();
  }

  // Permet de pré-cocher le type de pokémon s'il en a déjà un
  hasType(type: string): boolean {
    return this.pokemon.types.includes(type);
  }

  // Prend en compte la sélection de type(s) choisi
  selectType($event: Event, type: string) {
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;

    // Lorsque l'utilisateur va cocher la checkbox d'un type, on va l'ajouter
    // Lorsque l'utilisateur va décocher la checkbox d'un type, on va le retirer
    if (isChecked) {
      this.pokemon.types.push(type);
    } else {
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1);
    }
  }

  // Rend valide ou invalide en fonction du nombre de types choisi
  isTypesValid(type: string): boolean {
    // Si le pokemon a qu'un seul type et que je suis en train de travailler sur le type courant, on bloque cette checkbox afin de ne pas enlever le seul type du pokemon
    if (this.pokemon.types.length == 1 && this.hasType(type)) {
      return false;
    }

    // Si le pokemon a plus de 2 types et que je ne suis pas en train de travailler sur le type courant (permettre de décocher l'un des 3 types qu'il a), on bloque les autres checkbox afin de ne pas avoir plus de 3 types pour le pokemon
    if (this.pokemon.types.length > 2 && !this.hasType(type)) {
      return false;
    }    

    return true;
  }

  // Prend en compte la soumission du formulaire
  onSubmit() {
    console.log('Submit form !');
    this.router.navigate(['/pokemon', this.pokemon.id]);
  }
}
