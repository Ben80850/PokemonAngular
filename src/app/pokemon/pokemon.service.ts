import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemons';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  getPokemonList(): Pokemon[]{
    return POKEMONS;
  }

  getPokemonById(pokemonId:number): Pokemon|undefined{
    return POKEMONS.find(pokemon => pokemon.id == pokemonId);
  }

  getPokemonTypeList(): string[]{
    return [
      'Plante', 
      'Feu', 
      'Eau', 
      'Insecte', 
      'Normal',
      'Electrik',
      'Poison',
      'Fée', 
      'Vole', 
      'Combat',
      'Psy'
    ];
  }
}
