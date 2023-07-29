import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  customer: any;
  totalAmount: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const customerData = params.get('customer');
      if (customerData) {
        this.customer = JSON.parse(customerData);
        this.calculateTotalAmount();
      }
    });
  }

  calculateTotalAmount(): void {
    for (const order of this.customer.orders) {
      this.totalAmount += order.quantity * order.price;
    }
  }
}
