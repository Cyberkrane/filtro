import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character, Result } from '../interface/character';
import { Observable, map } from 'rxjs';
import { FetchAllPokemonREsponse, Pokemon } from '../interface/pokemons';

@Injectable({
  providedIn: 'root'
})
export class FiltrarService {

  private url: string = 'https://rickandmortyapi.com/api/character';
  private url2: string = 'https://rickandmortyapi.com/api/location';
  private url3: string = 'https://rickandmortyapi.com/api/episode';
  private url4: string = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getAllPokemons(): Observable<Pokemon[]> {
    return this.http.get<FetchAllPokemonREsponse>(`${this.url4}/pokemon?limit=1500`)
    .pipe(
      map(this.transformPokemons)
    )
  } 

  private transformPokemons(resp: FetchAllPokemonREsponse) {
    const pokemonList: Pokemon[] = resp.results.map(pokemon => {

      const urlArr = pokemon.url.split('/');
      const id = urlArr[urlArr.length - 2];
      const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

      return {
        id,
        pic,
        name: pokemon.name,

      }
    })

    return pokemonList
  }
  


}
