import {Component, OnInit} from '@angular/core';
import {CartService} from "./cart.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: any = [];
  cartTotal: number = 0;

  constructor(private cart: CartService,
              private router: Router) {
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    if (this.cart.getCart().length <= 0) {
      this.router.navigate(['/']);
    }
    this.cartItems = this.cart.getCart();

    this.cartTotal = this.getTotal();
  }

  increase(cart: any) {
    cart.quantity++;
    this.cartTotal = this.getTotal();
  }

  decrease(cart: any) {
    cart.quantity--;
    if (cart.quantity === 0) {
      this.remove(cart);
    }
    this.cartTotal = this.getTotal();
  }

  remove(cart: any) {
    this.cartItems.splice(this.cartItems.indexOf(cart), 1);
    this.cartTotal = this.getTotal();
  }

  getTotal() {
    return this.cartItems.reduce((prev, curr) => {
      return prev + (curr.price - 200) * curr.quantity;
    }, 0);
  }
}
