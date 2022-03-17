import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Utils} from "../utils";
import {ProductService} from "../product.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productForm : FormGroup;
  constructor(private fb: FormBuilder,
              private product: ProductService,) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      price: [0, [Validators.required]],
      image: ['', [Validators.required]],
      tags: ['', [Validators.required]],
    })
  }

  onSubmit() {
    if (this.productForm.valid) {
      const formData = Utils.ConvertToFormData(this.productForm.value);
      this.product.addProduct(formData).subscribe(res => {
        this.productForm.reset();
        alert('Product added successfully');
      })
    }
  }
}
