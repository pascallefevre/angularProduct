import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bicsize'
})
export class BicsizePipe implements PipeTransform {

  transform(value: string, maxLength: number): string {

    if (value.length > maxLength)
    {
      return 'ERROR:---{INVALID BANK NUMBER}---'
    }
    else{
        return value.substring(0,4).padEnd(maxLength, '*');
        }

  }

}
