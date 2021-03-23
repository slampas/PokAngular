import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Pokemon } from './pokemons';
import { POKEMONS} from './mock-pokemons';
  
@Component({
  selector: 'pokemon-app',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent implements OnInit  {
    ngOnInit(): void {
        this.pokemon = POKEMONS;
    } 
    
    name = 'Angular'; 
    private pokemon : Pokemon[];


}