import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product, Products } from '../products.model';
import { HttpClient } from '@angular/common/http';
import { getBaseUrl } from 'src/app/server.Model';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-product-screen',
  templateUrl: './product-screen.component.html',
  styleUrl: './product-screen.component.css'
})
export class ProductScreenComponent implements OnInit {

  
  private _subscription: Subscription
  productsRoute = getBaseUrl().concat("/products");
  categoryRoute = this.productsRoute.concat("/categories")

  //properties
  products: Product[];
  categories: string[];
  category: string = "";
  productWasSelected: Product;
  showDetailsProduct: boolean = true;
  // showDetailsProduct: string = 'none';
  

  constructor(private http: HttpClient) {
    this._subscription = new Subscription();
    this.products = [];
  }

  ngOnInit(): void {
    this.fetchProductData();
    this.fetchCategoryDataInit();
  }

  onProductSelectionDetails(product: Product){
    // this.showDetailsProduct = 'block';
    this.productWasSelected = product;
    if(this.showDetailsProduct === true){
      this.showDetailsProduct = false;
    } else {
      this.showDetailsProduct = true;
    }

    // if(this.showDetailsProduct === 'none'){
    //   this.showDetailsProduct = 'block';
    // } else {
    //   this.showDetailsProduct = 'none';
    // }
  }

  fetchProductData(): void{
    this._subscription.add(
      this.http.get<Products>(this.productsRoute).subscribe({
        next: (data) => {
          this.products = data.products;
          console.log(data.products)
          console.warn('userList', data);
        },
        error: (error) => {
          // Means error
          console.warn('error', error)
        },
        complete: () => {}
      })
    );
  }

  fetchCategoryDataInit(): void {
    this._subscription.add(
      this.http.get<string[]>(this.categoryRoute).subscribe({
        next: (data) => {
          // Means success
          this.categories = data;
          console.warn('categoryData', data);
        },
        error: (error) => {
          // Means error
        },
        complete: () => {}
      })
    );
  }

 

}
