import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  submitted = false;
  product: Product = {} as Product;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    console.log(this.product);
  }

  createProduct(): void {
    const data = {
      name: this.product.name,
      description: this.product.description,
      price: this.product.price
    };

    this.productService.create(data).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  newProduct(): void {
    this.submitted = false;
    this.product;
  }
}
