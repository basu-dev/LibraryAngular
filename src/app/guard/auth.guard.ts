import { IsAuthenticated } from './../store/actions/auth.action';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { state } from '@angular/animations';
import * as fromApp from "../app.reducer"
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public router:Router,public store:Store<fromApp.State>){}
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot):boolean{
    if(this.store.select(fromApp.getIsAuthenticated)){
    
   
      return true
    }
    else{    
      this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
      return false;
    }
    
  }
  
}