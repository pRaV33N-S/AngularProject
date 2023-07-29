import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
  })
  export class FilterPipe implements PipeTransform {
    transform(customers: any[], searchText: string): any[] {
      if (!customers) {
        return [];
      }
      if (!searchText) {
        return customers;
      }
  
      searchText = searchText.toLowerCase();
  
      return customers.filter(customer => {
        const fullName = `${customer.firstName} ${customer.lastName}`.toLowerCase();
        return fullName.includes(searchText);
      });
    }
  }
  