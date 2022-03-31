import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
  title = "Deposit";
  amount = 0;
  bal = 0;
  user: User;
  userId!: number;
  users: User[] = [];

  onSubmit(){
    this.getUser();
    
    let updatedUser = {
      id : this.userId,
      username: this.user.username,
      pin: this.user.pin,
      balance: this.user.balance + this.amount
    }

    this.userService.updateUser(this.userId, updatedUser);

    alert("Sucess! New balance is "+ updatedUser.balance);
    this.router.navigate(['login']);

  }
  
  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

 

  getUser(){
    this.users = this.userService.getUsers();
    this.users.forEach((curr) => {
      if(this.userId == curr.id){
        this.user = curr;
      }
    })
  }

  ngOnInit(): void {
    // console.log(user);
    let id = this.route.snapshot.queryParamMap.get('id') as string;
    this.userId = +id;
    this.getUser();
  }


}
