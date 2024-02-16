import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Amazon';
  loadedFeature = 'products';

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
 

}
