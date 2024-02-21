import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../products.model';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  @Input() productSelected: Product;
  @Input() acitivateModal: boolean;
  @Output() goBackDetails = new EventEmitter<void>();
  
  /**
   *
   */
  constructor() {
    
  }

  onSelection(){
    this.goBackDetails.emit()
  }
  
 
}
