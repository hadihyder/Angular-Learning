import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  
  title= "Withdraw";
  user: User;
  amount = 0;
  userId!: number;
  users: User[] = [];

  onSubmit(){
    this.getUser();
    let updatedUser = {
      id : this.userId,
      username: this.user.username,
      pin: this.user.pin,
      balance: this.user.balance - this.amount
    }

    this.userService.updateUser(this.userId, updatedUser);

    alert("Success! New balance is "+ updatedUser.balance);

    this.router.navigate(['login']);

  }

  getUser(){
    this.users = this.userService.getUsers();
    this.users.forEach((curr) => {
      if(this.userId == curr.id){
        this.user = curr;
      }
    })
  }

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(){
    let id = this.route.snapshot.queryParamMap.get('id') as string;
    this.userId = +id;
    this.getUser();
  }

}
