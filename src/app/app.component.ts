import { Component , OnInit} from '@angular/core';
import { POKEMONS } from './mock-pokemons';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  pokemonsList: Pokemon[] =  POKEMONS;
  pokemonSelected : Pokemon|undefined;

  ngOnInit(){
    console.table(this.pokemonsList);
    }

  selectPokemon(pokemonId: string){
    const pokemon : Pokemon|undefined = this.pokemonsList.find(pokemon => pokemon.id == +pokemonId);
    if(pokemon){
      console.log(`Vous avez cliqué sur le pokemon ${pokemon.name}`);
      this.pokemonSelected = pokemon;

    }else{
      console.log(`Vous avez cliqué sur un pokémon qui n'existe pas.`);
      this.pokemonSelected = pokemon;
    }

  }
  
}