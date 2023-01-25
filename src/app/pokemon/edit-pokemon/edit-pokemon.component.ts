import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  template: `
    <p>
      edit-pokemon works!
    </p>
  `,
  styles: [
  ]
})
export class EditPokemonComponent implements OnInit {
  pokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute, 
    private pokemonService: PokemonService){}

    ngOnInit() {
      const pokemonId: number = Number(this.route.snapshot.paramMap.get('id'));
      if(pokemonId) {
        this.pokemon = this.pokemonService.getPokemonById(pokemonId);
      }
    }
}
