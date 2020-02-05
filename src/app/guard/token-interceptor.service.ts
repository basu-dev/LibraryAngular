import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(public router:Router) { }
  intercept(req,next){
    let newrequest=req.clone({
      setHeaders:{
        Authorization:`Bearer ${localStorage.getItem("userToken")}`
      }
    })
    return next.handle(newrequest).pipe(
      catchError(this.handleError)
    );
  }
  err:any;
  handleError(error:HttpErrorResponse){
    
    if(error instanceof HttpErrorResponse){
      console.log("Server Error",error.message)
      if(error.status==401){
        this.router.navigate(["/login"]);
      }
      this.err=error.error;
    }
    else{
      console.log("Client Side Error",error),
      this.err=error;
    }
    return throwError(this.err);
  }
}
