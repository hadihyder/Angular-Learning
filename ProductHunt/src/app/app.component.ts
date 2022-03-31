import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProductHunt';
  sortBy = 'Random';
  products = [
    {name: 'Coke', upvotes: 5, downvotes: 3},
    {name: 'Pepsi', upvotes: 3, downvotes: 5},
    {name: 'Fanta', upvotes: 6, downvotes: 2}]

  orderByUpvotes(){
    this.sortBy = 'Upvotes';
  } 
  orderByDownvotes(){
    this.sortBy = 'Downvotes';
  }  
}
