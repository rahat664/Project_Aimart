import {Component, Input, OnInit} from '@angular/core';
import {CartService} from "../../Pages/cart/cart.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  expanded: boolean;
  @Input() cart: any = {};

  constructor(private carts: CartService) {
  }

  ngOnInit(): void {
    this.cart = this.carts.getCart();
  }

}
