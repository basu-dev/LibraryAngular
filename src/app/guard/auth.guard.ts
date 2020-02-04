import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, RouterModule, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public router:Router){}
  canActivate():boolean{
    var token=localStorage.getItem("userToken");
    if(token!=null){
      return true
    }
    else{
      this.router.navigate(["/login"]);
      return false;
    }
    
  }
  
}