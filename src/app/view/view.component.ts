import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router,Params} from '@angular/router';
import {Location} from '@angular/common';
import { HttpClient , HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
public id;
public data :any;
  constructor(private route:ActivatedRoute,
              private router:Router,
              private location: Location,
              private _http:HttpClient) { }

  ngOnInit() {
    this.route.paramMap.subscribe(Params =>{
      this.id = Params.get('id');    })
      

  this._http.get('https://dev.uneva.in/task_721/patient.php?id='+this.id).subscribe((res)=>{
    this.data = res
    //this.total = res.length
    

    console.log(this.data);
  })
  }

}
