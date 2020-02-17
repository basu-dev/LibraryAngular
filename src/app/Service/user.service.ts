import { User } from './../Model/user';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import * as jwt_decode from "jwt-decode";
import { Injectable } from "@angular/core";
import { Global } from '../global/serverlinks';
import { Store } from '@ngrx/store';
import * as fromApp from "../app.reducer";
import * as auth from "../store/actions/auth.action";
import * as userAction from "../store/actions/login.action";
import * as jwt_decode from "jwt-decode"
import { Observable } from 'rxjs';

@Injectable({
    providedIn: "root"
})

export class UserService {
    Observable: any;
    constructor(public fb: FormBuilder, public http: HttpClient, public router: Router, public store: Store<fromApp.State>) { }
    public registerModel = this.fb.group({
        UserName: ['BasuDev', [Validators.required, Validators.minLength(4)]],
        Passwords: this.fb.group({
            Password: ['BasuDev@123', [Validators.required, Validators.minLength(6),
            Validators.maxLength(16)]],
            ConfirmPassword: ['BasuDev@123', [Validators.required, Validators.minLength(6),
            Validators.maxLength(16)]]

        }, { validator: this.passwordMismatch })
    }

    )
    public passwordMismatch(fb: FormGroup) {
        let confirmpassword = fb.get("ConfirmPassword");
        if (confirmpassword.errors == null || "passwordMismatch" in confirmpassword) {
            if (confirmpassword.value == fb.get("Password").value) {
                confirmpassword.setErrors({ passwordMismatch: false })
            }
            else {
                confirmpassword.setErrors({ passwordMismatch: true })
            }
        }
    }

    register() {
        let body = {
            "UserName": this.registerModel.value.UserName,
            "Password": this.registerModel.value.Passwords.Password,
            "ConfirmPassword": this.registerModel.value.Passwords.ConfirmPassword
        };
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' })
        return this.http.post(Global.REGISTER_USER, body, { headers: headers })
    }
    loginModel = this.fb.group({
        UserName: ['', [Validators.required, Validators.minLength(4)]],
        Password: ['', [Validators.required, Validators.minLength(6)]]
    })
    login() {
        let body = {
            "UserName": this.loginModel.value.UserName,
            "Password": this.loginModel.value.Password,
        }
        return this.http.post(Global.LOGIN, body)
    }
    public logout() {
        localStorage.removeItem("user");
        localStorage.removeItem("userToken");
        this.store.dispatch(new auth.IsUnAuthenticated)
        this.router.navigate(["/login"])
    }
    public test() {
        return this.http.get(`${Global.BASE_HOST_ENDPOINT}/whatever`)
    }
    getToken() {
        let token = localStorage.getItem('userToken');
        return token;
    }
    setToken(token) {
        this.store.dispatch(new auth.IsAuthenticated);
        // let user:User=jwt_decode(token);
        // this.store.dispatch(new userAction.loadData)
        localStorage.setItem("userToken", token);
    }
    getUser():Observable<User>{
       return this.http.get<User>("https://jsonplaceholder.typicode.com/users/1")  
    }
}
