import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
// import { user } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  title = "ATM";
  loginForm!: FormGroup;
  users: User[] = [];
  currUser!: User;
  isInvalidUser = false;
  authError: string = "Authentication Error. Please check username and pin";
  // user:any = { id: 1, username: "jack", pin: 1234, balance: 10000};
  
  constructor(private formBuilder: FormBuilder, private router: Router, 
              private userService: UserService) { 
    
  }

  getUsers(){
    this.users = this.userService.getUsers();
  }


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username:['', Validators.required],
      pin:['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]]
    })
    
  }
  userId: number = 0

  onSubmit() {
    if (this.loginForm.valid){
  
      this.userId = this.userService.validateUser(this.loginForm.value.username, this.loginForm.value.pin);
      if(this.userId != 0){
        
        this.router.navigate(['options', { id: this.userId}]);
      }
    

    
    } else {
      console.log("Error")
    }
    
    
  }


  

}


