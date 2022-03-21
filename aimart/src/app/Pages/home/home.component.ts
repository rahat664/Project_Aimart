import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: any[];
  Electronics: any[];
  Groceries: any[];
  Fashion: any[];
  Furniture: any[];
  Smartphones: any[];
  TopSellers: any[];
  Featured: any[];
  Favorites: any[];

  constructor(private product: ProductService) {
  }

  ngOnInit(): void {
    this.product.getProducts().subscribe(data => {
      this.products = data;
      console.log(this.products);
      this.Electronics = this.products.filter(product => product.tags[0] === 'Electronics');
      this.Fashion = this.products.filter(product => product.tags[0] === 'Fashion');
      this.Furniture = this.products.filter(product => product.tags[0] === 'Furniture');
      this.Groceries = this.products.filter(product => product.tags[0] === 'Groceries');
      this.Smartphones = this.products.filter(product => product.tags[0] === 'smartphones');
      this.TopSellers = this.products.filter(product => product.tags[0] === 'Top Sellers');
      this.Featured = this.products.filter(product => product.tags[0] === 'Featured');
      this.Favorites = this.products.filter(product => product.tags[0] === 'Favorites');
      console.log(this.Featured);
    });
  }

}
