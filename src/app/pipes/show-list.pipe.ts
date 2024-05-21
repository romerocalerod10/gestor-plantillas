import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showList'
})
export class ShowListPipe implements PipeTransform {

  transform(value: any[], startIndex: number): any[] {
    if (!value || value.length <= startIndex || startIndex < 0) {
      return [];
    }

    const filteredArray = [];
    for (let i = startIndex; i < value.length; i++) {
      if (value[i] === "NULL") {
        break;
      }
      filteredArray.push(value[i]);
    }

    return filteredArray;
  }
}
