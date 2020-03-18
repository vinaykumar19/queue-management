import { Injectable } from '@angular/core';
// importing http client to make the requests
import { HttpClient , HttpErrorResponse } from '@angular/common/http';

// import observable related code
 import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueueHttpService {

  public baseUr1='https://dev.uneva.in/task_721/list.php';



  constructor(private _http :HttpClient) { 

    console.log("queue-http service was called");
  
}

// exception handler
private handlerError(err:HttpErrorResponse){

  console.log("Handle error Http Calls")
  console.log(err.message);
      
 return Observable.throw(err.message)
      
    
}
  
// method to return all details
public getAllDetails(): any{

  let myResponse = this. _http.get(this.baseUr1);
  console.log(myResponse);
  return myResponse;
}



}
