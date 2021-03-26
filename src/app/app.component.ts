import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Pokemon } from './pokemons';
import { POKEMONS} from './mock-pokemons';
  
@Component({
  selector: 'pokemon-app',
  templateUrl:`./app/app.component.html`
})
export class AppComponent implements OnInit  {
    ngOnInit(): void {
        this.pokemons = POKEMONS;
    } 
    
    
    private pokemons : Pokemon[];
    private title: string = "Liste des pokémons";
    

    selectPokemon(pokemon: Pokemon){
      alert ("vous avez cliqué sur : "+ pokemon.name)
    }
}