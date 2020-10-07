import { Pipe, PipeTransform } from '@angular/core';
import MESES from '../constants/meses.constant';

@Pipe({
  name: 'mesesPipe'
})
export class MesesPipe implements PipeTransform {
  item = MESES;
  transform(value: any): any {
    const fil = this.item.filter(item => {
      if (+item.value === +value){
        return true;
      }
    });
    return fil.length ? fil[0].label : '';
  }
}
