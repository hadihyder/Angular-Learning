import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  
  num: string = "0";
  result:string = "0";
  op1: number = 0;
  op2: number = 0;
  operation:string = '';

  inputNumber(event : string) {
    if(this.num == "0"){
      this.num = event;
    }else {
      this.num += event;
    }
    
  }

  operations(operation: string){
  switch(operation){
    case '+':
      this.op1 = +this.num;
      this.num = "0";
      this.operation = '+';
      break;
    case '-':
      this.op1 = +this.num;
      this.num = "0";  
      this.operation = '-';
      break;
    case '/':
        this.op1 = +this.num;
        this.num = "0";  
        this.operation = '/';
        break;
    case 'x':
          this.op1 = +this.num;
          this.num = "0";  
          this.operation = 'x';
          break;
            
  }
  }

  getResult(){
    this.op2 = +this.num;
    if(this.operation == '+'){
      this.num = (this.op1 + this.op2).toString();
    } else if(this.operation == '-'){
      this.num = (this.op1 - this.op2).toString();
    } else if(this.operation == '/'){
      this.num = (this.op1 / this.op2).toString();
    } else if(this.operation == 'x'){
      this.num = (this.op1 * this.op2).toString();
    }
  }

  clear(){
    this.num = "0";
    this.op1 = 0;
    this.op2 = 0;
    this.result = "0";
  }
  constructor() { }

  ngOnInit(): void {
  }

}
