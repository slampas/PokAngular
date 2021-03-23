import { Component } from '@angular/core';
import { Pokemon } from './pokemons';
  
@Component({
  selector: 'pokemon-app',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent  { 
    name = 'Angular'; 
    private pokemon : Pokemon[];

}