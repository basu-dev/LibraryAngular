import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { state } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public router:Router){}
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot):boolean{
    
    var token=localStorage.getItem("userToken");
    if(token!=null){
      return true
    }
    else{    
      this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
      return false;
    }
    
  }
  
}