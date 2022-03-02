import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {

  transform(unitPrice: number, rate: number): number {
    return (unitPrice*rate)/100 + unitPrice;
  }
}
