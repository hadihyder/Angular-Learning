import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [
    { id: 1, username: 'john', pin: 1234, balance: 1000},
    { id: 2, username: 'jack', pin: 4567, balance: 2000},
    { id: 3, username: 'Rick', pin: 1357, balance: 3000},
    { id: 4, username: 'Weasley', pin: 1123, balance: 4000}
  ];

  addUser(user: User){
    this.users.push(user);
  }

  getUsers(){
    return this.users;
  }

  validateUser(username: string, pin: number) {
    let userId = 0
    this.users.forEach((user) => {
      if(username == user.username && pin == user.pin) {
        userId = user.id;
      } 
    })
    return userId;
  }

  getAUser(id: number): User {
    let currUser = {id: 1, username: 'john', pin: 1234, balance: 1000};
    this.users.forEach((user) => {
      if(id == user.id) {
        currUser = user;
      } 
    })
    return currUser;
  }

  updateUser(id: number, user: User){
    this.users.forEach((curr) => {
      if(curr!.id == id) {
        curr = user;
      }
    })
  }

  constructor() { }
}
