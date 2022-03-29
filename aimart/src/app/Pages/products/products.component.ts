import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  categories: any[] = [
    {
      name: 'All Products',
      image: 'all'
    },
    {
      name: 'Fashion Products',
      image: 'fashion'
    },
    {
      name: 'Electronics Products',
      image: 'electronics'
    },
    {
      name: 'Grocery Products',
      image: 'grocery'
    },
    {
      name: 'Smartphone Products',
      image: 'smart'
    },
    {
      name: 'Furniture Products',
      image: 'furniture'
    }
  ];


  selectedCatName: string = 'All Products';

  products: any[];
  Electronics: any[];
  Groceries: any[];
  Fashion: any[];
  Furniture: any[];
  Smartphones: any[];
  TopSellers: any[];
  selectedCategory: any[] = []
  @ViewChild('products') productsEl: ElementRef;

  constructor(private product: ProductService) {
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.product.getProducts().subscribe(data => {
      this.products = data;
      this.selectedCategory = this.products;
      this.Electronics = this.products.filter(product => product.tags[0] === 'Electronics');
      this.Fashion = this.products.filter(product => product.tags[0] === 'Fashion');
      this.Furniture = this.products.filter(product => product.tags[0] === 'Furniture');
      this.Groceries = this.products.filter(product => product.tags[0] === 'Grocery');
      this.Smartphones = this.products.filter(product => product.tags[0] === 'smartphone');
    });
  }

  onClick(category: any) {
    if (category.image === 'all') {
      this.selectedCategory = [];
      this.selectedCategory = this.products
      this.selectedCatName = '';
      this.selectedCatName = category.name;
    } else if (category.image === 'fashion') {
      this.selectedCategory = [];
      this.selectedCategory = this.Fashion;
      this.selectedCatName = '';
      this.selectedCatName = 'Fashion Products';
    } else if (category.image === 'electronics') {
      this.selectedCategory = [];
      this.selectedCategory = this.Electronics;
      this.selectedCatName = '';
      this.selectedCatName = 'Electronics';
    } else if (category.image === 'grocery') {
      console.log(this.Groceries);
      this.selectedCategory = [];
      this.selectedCategory = this.Groceries;
      this.selectedCatName = '';
      this.selectedCatName = category.name;
    } else if (category.image === 'smart') {
      console.log(this.Smartphones);
      this.selectedCategory = [];
      this.selectedCategory = this.Smartphones;
      this.selectedCatName = '';
      this.selectedCatName = 'Smartphones';
    } else if (category.image === 'furniture') {
      this.selectedCategory = [];
      this.selectedCategory = this.Furniture;
      this.selectedCatName = '';
      this.selectedCatName = 'Furniture';
    }
  }

  scrollTo(el: HTMLDivElement) {
    el.scrollIntoView({behavior: 'smooth'});
    // @ts-ignore
    window.scrollTo(0, el.nativeElement.offsetTop);
  }
}
