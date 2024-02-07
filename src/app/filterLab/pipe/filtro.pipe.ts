import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../interface/pokemons';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(pokemons: Pokemon[], page: number = 0, search: string = ''): Pokemon[] {
    if(search.length === 0) return pokemons.slice(page, page + 5);

    search = search.toLowerCase();
    const filteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(search));
    return filteredPokemons.slice(page, page + 5);
  }

}
