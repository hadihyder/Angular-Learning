import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<Object>, args: any[]): any {
    console.log(value);
    const sortField =args[0];
    
    console.log(sortField);
    if(sortField === 'Upvotes'){
      return value.sort((a:any, b:any) => b.upvotes - a.upvotes );
    }else if(sortField === 'Downvotes'){
      return value.sort((a:any, b:any) =>  b.downvotes - a.downvotes);
    } else{
      return value;
    }
  }

}
