
//this is a by default statement 
import { Component, OnInit, OnDestroy,ViewChild } from '@angular/core';
import { QueueHttpService } from '../queue-http.service';


//decorator
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

// a simple class

export class HomeComponent implements OnInit, OnDestroy{

  
  public data=[];
 public waiting;
 public completed;
 public total;
public sortArray=[];
  constructor(public queueHttpService:QueueHttpService) {

    console.log("Home component constructor called");
    
   }

  ngOnInit() {
    console.log("Home component OnInit called");

    this.queueHttpService.getAllDetails().subscribe((res)=>{
     this.data = res.sort((a, b) => {
        return a.tokenName - b.tokenName;
      });
      this.total = res.length
      
      

      
    })
    
  
    console.log('here'+this.data);
  }
ngOnDestroy(){
 console.log("Home component destroyed")

}

}