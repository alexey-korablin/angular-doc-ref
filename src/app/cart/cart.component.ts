import { Component, OnInit } from '@angular/core';

import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any;

  constructor(private cartServise: CartService) {}

  ngOnInit(): void {
    this.items = this.cartServise.getItems();
  }
}
