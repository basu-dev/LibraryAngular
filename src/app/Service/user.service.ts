import { catchError, map, tap } from 'rxjs/operators';
import { FormBuilder,Validators, FormGroup,FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Injectable } from "@angular/core";
import { Global } from '../global/serverlinks';
import { User } from '../Model/user';
import { Observable } from 'rxjs';


@Injectable({
    providedIn:"root"
})

export class UserService{
    Observable: any;
  constructor(public fb:FormBuilder,public http:HttpClient){}
    public registerModel=this.fb.group({
        UserName:['',[Validators.required,Validators.minLength(4)]],
        Passwords:this.fb.group({
            Password:['',[Validators.required,Validators.minLength(8),
                        Validators.maxLength(16)]],
            ConfirmPassword:['',[Validators.required,Validators.minLength(8),
                Validators.maxLength(16)]]
        
        },{validator:this.passwordMismatch})
    }

    )
    public passwordMismatch(fb:FormGroup){
        let confirmpassword=fb.get("ConfirmPassword");
        if(confirmpassword.errors==null || "passwordMismatch" in confirmpassword){
            if(confirmpassword.value==fb.get("Password").value){
                confirmpassword.setErrors({passwordMismatch:false})
            }
            else{
                confirmpassword.setErrors({passwordMismatch:true})
            }
        }
    }
    
    register(){
        let body={
            "UserName":this.registerModel.value.UserName,
            "Password":this.registerModel.value.Password,
            "ConfirmPassword":this.registerModel.value.ConfirmPassword
        }
        return this.http.post<Observable<User>>(Global.REGISTER_USER,body).pipe(
            map(response=>response),
            tap(response=>console.log(response)),
            catchError(this.handleError)
        
        )
    }
    loginModel=this.fb.group({
        UserName:['',[Validators.required,Validators.minLength(4)]],
        Password:['',[Validators.required,Validators.minLength(8)]]
    })
    login(){
        let body={
            "UserName":this.loginModel.value.UserName,
            "Password":this.loginModel.value.Password,
        }
        return this.http.post<Observable<User>>(Global.LOGIN,body).pipe(
            map(response=>response),
            tap(response=>console.log(response)),
            catchError(this.handleError)
        
        )
    }
    public handleError(error){
       return this.Observable.throw(error);
    }
}
