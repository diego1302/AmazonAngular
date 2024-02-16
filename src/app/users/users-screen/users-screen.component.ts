import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { User, Users } from '../users.Model';
import { HttpClient } from '@angular/common/http';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-users-screen',
  templateUrl: './users-screen.component.html',
  styleUrl: './users-screen.component.css'
})
export class UsersScreenComponent implements OnInit {

  private _subscription: Subscription;
  baseUrl = "https://dummyjson.com";  
  usersUrl = "/users"

  //properties
   users: User[];
   userToDisplay : User;

   //cotor
   constructor(private http: HttpClient) { 
     this._subscription = new Subscription();
     this.users = [];
   }

  

   onUserSelected(user: User) {
    this.userToDisplay = user;
    
  }
 
   ngOnInit(): void {
     this.fetchUserData();
     
   }
 
   fetchUserData(): void{
     this._subscription.add(
       this.http.get<Users>(this.baseUrl.concat(this.usersUrl)).subscribe({
         next: (data) => {
           this.users = data.users;
           console.log(data.users)
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
}
