import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArrayImpuro',
  standalone: true
})
export class FilterArrayImpuroPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
