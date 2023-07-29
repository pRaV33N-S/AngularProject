import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  customers = [
    {
      firstName: 'Arjun',
      lastName: 'Kumar',
      address: '456 Park Road',
      city: 'Chennai',
      state: 'Tamil Nadu',
      orderTotal: 1500,
      orders: [
        {
          product: 'Jeans',
          quantity: 1,
          price: 999.99
        },
        {
          product: 'Shirt',
          quantity: 2,
          price: 299.99
        }
      ]
    },
    {
      firstName: 'Priya',
      lastName: 'Rajendran',
      address: '789 Lake Avenue',
      city: 'Coimbatore',
      state: 'Tamil Nadu',
      orderTotal: 2500,
      orders: [
        {
          product: 'Saree',
          quantity: 1,
          price: 1999.99
        },
        {
          product: 'Earrings',
          quantity: 1,
          price: 499.99
        }
      ]
    },
    {
      firstName: 'Senthil',
      lastName: 'Kumar',
      address: '321 Garden Street',
      city: 'Madurai',
      state: 'Tamil Nadu',
      orderTotal: 800,
      orders: [
        {
          product: 'Watch',
          quantity: 1,
          price: 799.99
        }
      ]
    },
    {
      firstName: 'Deepa',
      lastName: 'Murugan',
      address: '567 Forest Avenue',
      city: 'Tiruchirappalli',
      state: 'Tamil Nadu',
      orderTotal: 1200,
      orders: [
        {
          product: 'Kurti',
          quantity: 1,
          price: 999.99
        },
        {
          product: 'Leggings',
          quantity: 2,
          price: 99.99
        }
      ]
    },
    {
      firstName: 'Vijay',
      lastName: 'Krishnan',
      address: '890 Mountain Road',
      city: 'Erode',
      state: 'Tamil Nadu',
      orderTotal: 500,
      orders: [
        {
          product: 'Mobile Cover',
          quantity: 2,
          price: 199.99
        }
      ]
    },
    {
      firstName: 'Anitha',
      lastName: 'Srinivasan',
      address: '234 River View',
      city: 'Thanjavur',
      state: 'Tamil Nadu',
      orderTotal: 1800,
      orders: [
        {
          product: 'Kanjivaram Silk Saree',
          quantity: 1,
          price: 1499.99
        },
        {
          product: 'Bangles',
          quantity: 4,
          price: 74.99
        }
      ]
    },
    {
      firstName: 'Ganesh',
      lastName: 'Ranganathan',
      address: '876 Beach Road',
      city: 'Puducherry',
      state: 'Tamil Nadu',
      orderTotal: 3000,
      orders: [
        {
          product: 'Laptop',
          quantity: 1,
          price: 2999.99
        },
        {
          product: 'Mouse',
          quantity: 1,
          price: 49.99
        }
      ]
    }
  ];
  searchText:string='';
  currentPage: number = 1;
  itemsPerPage: number = 5;
  constructor(private router: Router) {}
  ngOnInit() {
    
  }
  viewOrders(customer: any) {
    this.router.navigate(['/orders', { customer: JSON.stringify(customer) }]);
  }
}  