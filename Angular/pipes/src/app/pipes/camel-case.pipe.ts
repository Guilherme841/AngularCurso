import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase',
  standalone: true,
})
export class CamelCasePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    const firstWord = value.split(' ').map((word) => {
      const fw = word[0].toString().toLocaleUpperCase() + word.slice(1);
      return fw ;
    });
    return firstWord.join(' ');
  }
}
