import { Component, Input, input } from '@angular/core';
import { User } from '../users.Model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {

  @Input() displayUserSelected: User;


}
