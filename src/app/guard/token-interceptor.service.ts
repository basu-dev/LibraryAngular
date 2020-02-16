import { UserService } from './../Service/user.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {Injector} from "@angular/core"
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(public injector:Injector) { }

  intercept(req,next){
    let newrequest=req.clone({
      setHeaders:{
        "Content-Type":"application/json",
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
       alert("Not Authorized");
      }
      this.err=error.message;
    }
    else{
      console.log("Client Side Error",error),
      this.err=error;
    }
    return throwError(this.err);
  }
}
