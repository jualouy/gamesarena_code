import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {

    if(arg==='ASC'){
      return value.sort((a, b) => parseFloat(a.score) - parseFloat(b.score));
    }
    
    if(arg==='DESC'){
      console.log('DESC');
      return value.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
    }

    if(arg === '' || arg.length < 2){ 
      return value;
    }
    
    const resultGames = [];
    for(const games of value){
      if(games.title.toLowerCase().indexOf(arg.toLowerCase())>-1 || games.platform.toLowerCase().indexOf(arg.toLowerCase())>-1){
        resultGames.push(games);
      }
    }
    return resultGames;
  }

}
