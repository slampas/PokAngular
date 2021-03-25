import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Pokemon } from './pokemons';
import { POKEMONS} from './mock-pokemons';
  
@Component({
  selector: 'pokemon-app',
  template: `<h1>Liste de pokemons</h1>`,
})
export class AppComponent implements OnInit  {
    ngOnInit(): void {
        this.pokemon = POKEMONS;
    } 
    
    
    private pokemon : Pokemon[];

    selectPokemon(pokemon: Pokemon){
      alert ("vous avez cliqué sur : "+ pokemon.name)
    }

}