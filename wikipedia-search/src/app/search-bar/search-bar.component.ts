import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() submitted = new EventEmitter<string>();
  termEvent: any;
  term= '';

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(event: any){
    event.preventDefault();
    this.term = (<HTMLInputElement> this.termEvent.target).value;
    this.submitted.emit(this.term);
  }

}
