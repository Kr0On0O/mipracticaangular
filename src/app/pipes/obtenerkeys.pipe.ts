import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'obtenerkeys'
})
export class ObtenerkeysPipe implements PipeTransform {

  transform(value: any): any {
    let keys=[];
    for(let key in value){
      keys.push(key)
    }

    return keys;
  }

}
