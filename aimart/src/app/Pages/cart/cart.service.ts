import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  cart = [];

  constructor() {
  }

  addToCart(product) {
    if (this.cart.length > 0) {
      let duplicate = false;
      this.cart.map(item => {
        if (item.name === product.name) {
          duplicate = true;
          item.quantity++;
        }
      });
      if (!duplicate) {
        this.cart.push(product);
      }
    }
    if (this.cart.length === 0) {
      this.cart.push(product);
    }
  }


  getCart() {
    return this.cart;
  }

  removeFromCart(product) {
    this.cart = this.cart.filter(p => p.id !== product.id);
    this.cart$.next(this.cart);
  }

  removeAllFromCart() {
    this.cart = [];
    this.cart$.next(this.cart);
  }
}
