import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Favorite Films';
  films = [
    {
    imgUrl: "https://www.mundopeliculas.tv/wp-content/uploads/2022/01/THE-GODFATHER-ANNIVERSARY.jpg",
    name: "The Godfather",
    date: "03/24/1972",
    director: "Francis Ford Coppola",
    boxOffice: 134966411
  },
  {
    imgUrl: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sBnhJ4f5KAzg6C3FwnEb8QFj8SB.jpg",
    name: "The Shawshank Redemption",
    date: "09/22/1994",
    director: "Frank Darabont",
    boxOffice: 73300000
  },
  {
    imgUrl: "https://m.media-amazon.com/images/I/91KkWf50SoL._SL1500_.jpg",
    name: "The Dark Knight",
    date: "07/14/2009",
    director: "Christopher Nolan",
    boxOffice: 1003045358
  }
]

}
