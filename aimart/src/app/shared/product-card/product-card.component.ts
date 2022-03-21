import {Component, Input, OnInit, Output} from '@angular/core';
import {CartService} from "../../Pages/cart/cart.service";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: any = {};

  constructor(private carts: CartService) {
  }

  ngOnInit(): void {
    this.product['quantity'] = 1;
  }

  onclick(product: any) {
    this.carts.addToCart(product);
  }
}
