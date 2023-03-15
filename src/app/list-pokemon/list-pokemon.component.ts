import { Component } from '@angular/core';
import { POKEMONS } from '../mock-pokemons';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent {
  
  pokemonsList: Pokemon[] =  POKEMONS;

  constructor(private router: Router){}

  GoToPokemon(pokemon: Pokemon){
    this.router.navigate(['/pokemon', pokemon.id]);
  }

}
