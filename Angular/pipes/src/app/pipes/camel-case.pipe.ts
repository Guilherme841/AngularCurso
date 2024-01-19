import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase',
  standalone: true,
})
export class CamelCasePipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): unknown {
    let values = value.split('');
    let result = '';
    for (let i of values) {
      result += this.cap(i) + '';
    }
    return result;
  }
  cap(value: string) {
    return (
      value.substring(0, 1).toUpperCase() + value.substring(1).toLocaleUpperCase()
    );
  }
}
