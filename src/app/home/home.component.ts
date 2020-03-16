
//this is a by default statement 
import { Component, OnInit, OnDestroy } from '@angular/core';
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


  constructor(public queueHttpService:QueueHttpService) {

    console.log("Home component constructor called")
   }

  ngOnInit() {
    console.log("Home component OnInit called");

    this.queueHttpService.getAllBlogs().subscribe((res)=>{
      this.data = res
      this.total = res.length
      

      console.log(this.data);
    })
    
    
  
    console.log(this.data);
  }
ngOnDestroy(){
 console.log("Home component destroyed")

}

}