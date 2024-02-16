import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductScreenComponent } from './product-screen/product-screen.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductCategoryComponent, ProductDetailsComponent } from './product.index';



@NgModule({
  declarations: [
    ProductScreenComponent,
    ProductCardComponent,
    ProductCategoryComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ProductScreenComponent,
    ProductCardComponent,
    ProductCategoryComponent,
    ProductDetailsComponent
  ]
})
export class ProductsModule { }
