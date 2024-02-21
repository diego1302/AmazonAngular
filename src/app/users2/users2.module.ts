import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Users2screenComponent } from './users2screen/users2screen.component';
import { Users2detailsComponent } from './users2details/users2details.component';
import { Users2CardsComponent } from './users2-cards/users2-cards.component';



@NgModule({
  declarations: [
    Users2screenComponent,
    Users2detailsComponent,
    Users2CardsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    Users2screenComponent,
    Users2detailsComponent,
    Users2CardsComponent
  ]
})
export class Users2Module { }
