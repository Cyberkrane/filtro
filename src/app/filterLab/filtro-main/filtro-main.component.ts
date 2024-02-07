import { Component, OnInit } from '@angular/core';
import { FiltrarService } from '../services/filtrar.service';
import { Pokemon } from '../interface/pokemons';

@Component({
  selector: 'app-filtro-main',
  templateUrl: './filtro-main.component.html',
  styleUrls: ['./filtro-main.component.scss']
})
export class FiltroMainComponent implements OnInit{

  public pokemonList: Pokemon[] = [];
  public page: number = 0;
  public search: string = '';

  constructor(private filtrarService: FiltrarService) { }

  ngOnInit(): void {
    this.filtrarService.getAllPokemons()
        .subscribe(data => 
      this.pokemonList = data
      )
  }

  nextPage(){
    if(this.page >= this.pokemonList.length - 7) return
    this.page += 7
    console.log(this.page);
  }

  prevPage(){
    if(this.page <= 0) return
    this.page -= 7
    console.log(this.page);
  }

  onSearchPokemon(search: string){
   this.search = search;
   console.log(this.search);
  }

}
