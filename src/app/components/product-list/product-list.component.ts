import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products!: Product[];
  currentProduct!: Product;
  currentIndex: number = -1;
  productName: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.readProducts();
  }

  readProducts(): void {
    this.productService.readAll().subscribe(
      products => {
        this.products = products;
      },
      error => {}
    );
  }

  refresh(): void {
    this.readProducts();
    this.currentProduct;
    this.currentIndex = -1;
  }

  setCurrentProduct(product: Product, index: number): void {
    this.currentProduct = product;
    this.currentIndex = index;
  }

  deleteAllProducts(): void {
    // temp fix
    this.products.length = 0;
    // this.productService.deleteAll().subscribe(
    //   response => {
    //     this.readProducts();
    //   },
    //   error => {}
    // );
  }

  searchByName(): void {
    this.productService.searchByName(this.productName).subscribe(
      products => {
        this.products = products;
      },
      error => {}
    );
  }
}
