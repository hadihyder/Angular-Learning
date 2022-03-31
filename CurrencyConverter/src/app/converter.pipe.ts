import { Pipe, PipeTransform } from '@angular/core';
// import { RATES, Rates } from './rates';

@Pipe({
  name: 'converter'
})
export class ConverterPipe implements PipeTransform {

  transform(value: any, args: any[]): any {
    
    let currencySource = args[0];
    let currencyTarget = args[1];
    let sourceRate = 0;
    let targetRate = 0;
    if(currencySource == "USD") {
      sourceRate = 1.00;
    } else if(currencySource == "GBP"){
      sourceRate = 0.91; 
    } else if(currencySource == "CAD"){
      sourceRate = 1.25;
    }
    
    if(currencyTarget == "USD"){
      targetRate = 1.00;
    } else if(currencyTarget == "GBP"){
      targetRate = 0.91;
    } else if(currencyTarget == "CAD"){
      targetRate = 1.25;
    }
    
    
    return value / sourceRate * targetRate;    
    
  }

}
