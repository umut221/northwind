import { Product } from './../models/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(products: Product[], filterText: string): Product[] {
    filterText = filterText?filterText.toLocaleLowerCase():"";
    return filterText?products.filter((p:Product)=>p.productName.toLocaleLowerCase().indexOf(filterText)!==-1):products;
  }

}