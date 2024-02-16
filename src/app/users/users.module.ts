import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardsComponent } from './user-cards/user-cards.component';
import { UsersScreenComponent } from './users-screen/users-screen.component';
import { UserDetailsComponent } from './user-details/user-details.component';



@NgModule({
  declarations: [
    UserCardsComponent,
    UsersScreenComponent,
    UserDetailsComponent
  
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UserCardsComponent,
    UsersScreenComponent,
    UserDetailsComponent

  ]
})
export class UsersModule { }
