import { Component, OnInit } from '@angular/core';
import { Book } from './book.model';
import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Books About Banking';

  books: Book[] = [];

  constructor(private bookService: BookService){

  }

  ngOnInit() {
    const booksObservable = this.bookService.getBooks();
    booksObservable.subscribe((booksData: Book[]) => {
      this.books = booksData;
    })
  }
}
