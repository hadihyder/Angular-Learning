import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  converterForm: FormGroup;

  title = 'Currency Converter';
  currencies = [
    { currency: "USD"},
    { currency: "GBP"},
    { currency: "CAD"}
  ];
  
  default = "USD";
  selectedSrc = '';
  selectedTrgt = '';
  inputMoney : number;
  isReady = false;


  constructor(private fb: FormBuilder){}
  
  ngOnInit(){
    this.converterForm = this.fb.group({
      currencySource:[null],
      currencyTarget:[null]
    });

    this.converterForm.controls['currencySource'].setValue(this.default, {onlySelf: true})
    this.converterForm.controls['currencyTarget'].setValue(this.default, {onlySelf: true})
    
  }

  

  submit(){
   
    this.selectedSrc = this.converterForm.value.currencySource;
    this.selectedTrgt = this.converterForm.value.currencyTarget
    this.isReady = true;
  }

  onInputMoney(event: Event){
    let value = (<HTMLInputElement>event.target).value;
    this.inputMoney = parseFloat(value);
  }


}
