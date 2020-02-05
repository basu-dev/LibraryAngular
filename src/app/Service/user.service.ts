import { Router } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators';
import { FormBuilder,Validators, FormGroup,FormControl } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Injectable } from "@angular/core";
import { Global } from '../global/serverlinks';
import { User } from '../Model/user';
import { Observable, throwError } from 'rxjs';


@Injectable({
    providedIn:"root"
})

export class UserService{
    Observable: any;
  constructor(public fb:FormBuilder,public http:HttpClient,public router:Router){}
    public registerModel=this.fb.group({
        UserName:['BasuDev',[Validators.required,Validators.minLength(4)]],
        Passwords:this.fb.group({
            Password:['BasuDev@123',[Validators.required,Validators.minLength(6),
                        Validators.maxLength(16)]],
            ConfirmPassword:['BasuDev@123',[Validators.required,Validators.minLength(6),
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
            "Password":this.registerModel.value.Passwords.Password,
            "ConfirmPassword":this.registerModel.value.Passwords.ConfirmPassword
        };
        let headers=new HttpHeaders({'Content-Type':'application/json'})
        return this.http.post(Global.REGISTER_USER,body,{headers:headers})
    }
    loginModel=this.fb.group({
        UserName:['',[Validators.required,Validators.minLength(4)]],
        Password:['',[Validators.required,Validators.minLength(6)]]
    })
    login(){
        let body={
            "UserName":this.loginModel.value.UserName,
            "Password":this.loginModel.value.Password,
        }
        return this.http.post(Global.LOGIN,body)
    }
    public logout(){
        localStorage.removeItem("user");
        localStorage.removeItem("userToken");
        this.router.navigate(["/login"])
    }
    public test(){
       return this.http.get(`${Global.BASE_HOST_ENDPOINT}/whatever`)
    }
   
}
