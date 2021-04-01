import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.module';
import { ProductRepository } from 'src/app/model/product.repository';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productRepository: ProductRepository) { }

  ngOnInit(): void {
  }

  getProducts(): Product[] {
    return this.productRepository.getProducts();
  }

  deleteProduct(product: Product) {
    this.productRepository.deleteProduct(product);
  }

}
