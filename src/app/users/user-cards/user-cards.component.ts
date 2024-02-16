import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../users.Model';

@Component({
  selector: 'app-user-cards',
  templateUrl: './user-cards.component.html',
  styleUrl: './user-cards.component.css'
})
export class UserCardsComponent {

  @Input() user: User;
  @Output() userSelected = new EventEmitter<User>();

  onDetailsClick(user: User){
    this.userSelected.emit(user);    
  }
}
