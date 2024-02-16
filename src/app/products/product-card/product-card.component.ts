import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product, Products } from '../products.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() product: Product;
  @Output() productSelected = new EventEmitter<void>();

  onSelection(){
    this.productSelected.emit()
  }

}
