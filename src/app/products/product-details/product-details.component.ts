import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../products.model';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  @Input() productSelected: Product;
  @Input() acitivateModal: boolean;

  /**
   *
   */
  constructor() {
    
    
  }
  
 
}
