import { Component, OnInit} from '@angular/core';
import { fromEvent, interval, map, mapTo, merge, NEVER, observable, Observable, scan, startWith, Subscription, switchMap, tap } from 'rxjs';



@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})

// }
export class CountDownComponent  implements OnInit{


  countdowns = 0;
  pauses = 0;

  
  public seconds: number = 0;
  public minutes: number = 0;
  public hours: number = 0;
  
  setValue(val: number) {
    this.seconds = val % 60;
    this.minutes = Math.floor(val / 60) % 60;
    this.hours = Math.floor(val/3600);
  }

  subscription : Subscription;

  timer = 0;
  
  ngOnInit() {
  }
  
  intervalHandle :any;
  onStart(){

    this.intervalHandle= setInterval(()=>{
      if(this.timer == 1500){
       this.onStop();
       this.countdowns++; 
       this.onPause();
      }
       this.setValue(this.timer++);
     },1000);
    
  }

  onPause(){
    this.pauses++;
    let pauseTimer = 0;
    let pauseInterval = setInterval(() => {
      pauseTimer++;
      console.log("Pause", pauseTimer)
      if(pauseTimer == 300) {
        clearInterval(pauseInterval);
        this.onStart();
      }
    },1000)

  }

  onStop(){
  
    clearInterval(this.intervalHandle);
    this.setValue(0)
    this.timer = 0;
  }

  
}
