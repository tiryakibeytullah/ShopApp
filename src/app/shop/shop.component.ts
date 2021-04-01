import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Cart } from "../model/cart.model";
import { Category } from "../model/category.module";
import { CategoryRepository } from "../model/category.repository";
import { Product } from "../model/product.module";
import { ProductRepository } from "../model/product.repository";
declare var $: any;

@Component({
    selector: 'shop',
    templateUrl: 'shop.component.html',
    styleUrls: ['shop.component.css']
})

export class ShopComponent implements OnInit {

    public selectedCategory: Category = null;
    public productsPerPage = 5;
    public selectedPage = 1;
    public selectedProducts: Product[] = [];

    constructor(private productRepository: ProductRepository
    ) { }

    ngOnInit() {
        $(document).ready(function () {
            $(".toast").toast("show");

            $("#closeAlert").click(function () {
                $("#productLengthAlert").slideUp(500);
            });
        });
    }

    get products(): Product[] {
        let index = (this.selectedPage - 1) * this.productsPerPage;
        // 0*3 = 0 ya da 1*3 = 3 ürün gelir.

        this.selectedProducts = this.productRepository.getProducts(this.selectedCategory);

        return this.selectedProducts.slice(index, index + this.productsPerPage);
    }
    get pageNumbers(): number[] {
        return Array(Math.ceil(this.productRepository.getProducts(this.selectedCategory).length / this.productsPerPage))
            .fill(0)
            .map((a, i) => i + 1);
    }
    changePage(p: number) {
        this.selectedPage = p;
    }
    changePageSize(size: number) {
        this.productsPerPage = size;
        this.changePage(1);
    }
    getCategory(category: Category) {
        this.selectedCategory = category;
    }
}