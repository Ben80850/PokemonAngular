import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Unsubscribable } from 'rxjs';
import { POKEMONS } from '../mock-pokemons';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: [
  ]
})
export class DetailPokemonComponent implements OnInit {

  pokemonList: Pokemon[];
  pokemon : Pokemon|undefined;

  constructor(private route: ActivatedRoute, private router : Router) {}

  ngOnInit() { 
    this.pokemonList = POKEMONS;
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');

    if(pokemonId){
      this.pokemon =  this.pokemonList.find(pokemon => pokemon.id == +pokemonId)
    }

  }

  goTopokemonList(){
    this.router.navigate(['/pokemons']);

  }


}
