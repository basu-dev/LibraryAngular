import { authActions, IsUnAuthenticated } from './store/auth/auth.action';
import { UserService } from './Service/user.service';
import { navcomponents } from './global/navcomponents';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as fromApp from "./app.reducer";
import * as auth from "./store/auth/auth.action";
import * as userAction from "./store/login/login.action";
import { Store } from '@ngrx/store';
import * as jwtdecode from "jwt-decode"
import { Observable } from 'rxjs';
import { User } from './Model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public router:Router,public userService:UserService,public store:Store<fromApp.State>){
  }

  ngOnInit(): void {
    var result = this.userService.getToken()
    if(result!=null){
      console.log(jwtdecode(result));
      this.store.dispatch(new auth.IsAuthenticated)
       this.User=this.store.select<any>(fromApp.getUser)
       console.log(this.User)
      this.navlist=navcomponents;

    }
    else{
      this.store.dispatch(new auth.IsUnAuthenticated)

    }
    this.loggedin$=this.store.select(fromApp.getIsAuthenticated)

  }

  public loggedin$:Observable<boolean>;

  User;
  navlist;
  title = 'library';
  public opened=true;
  Link(link){
    if(link){
      this.router.navigate([link]);
    }
  }
logout(){ 
  this.userService.logout()
}
test(){
  this.userService.setToken("sdf");
  this.ngOnInit()
  
}
  
}
