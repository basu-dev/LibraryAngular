import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as fromApp from "../app.reducer"
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';
import { RecursiveTemplateAstVisitor } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate{
  constructor(private store : Store<fromApp.State>,private router:Router){}
  public returnvalue$:boolean;
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      this.store.select(fromApp.getIsAuthenticated).subscribe(
       result=>this.returnvalue$=result,
     )

      if(this.returnvalue$==true){
        this.router.navigate(["rolelist"])
      }
       return !this.returnvalue$
      
      
      
  }
  
}
