import { Component } from '@angular/core';
import { Router,Event, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromApp from './app.reducer';
import { navcomponents } from './global/navcomponents';
import { User } from './Model/user';
import { UserService } from './Service/user.service';
import * as actions from './store/actions';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(
    public router: Router,
    public userService: UserService,
    public store: Store<fromApp.State>
  ) {
this.router.events.subscribe((routerEvent:Event)=>{

  if(routerEvent  instanceof NavigationStart){
    this.loading=true
  }
  if(routerEvent  instanceof NavigationEnd){
    this.loading=false
  }
  if(routerEvent  instanceof NavigationCancel){
    this.loading=false
  }

})

  }

  public loggedin$: Observable<boolean>;
  User: User;
  navlist;
  public opened = true;
  public loading:boolean=false;

  ngOnInit(): void {
    var result = this.userService.getToken();
    if (result != null) {
      this.store.dispatch(new actions.IsAuthenticated()),
        this.store
          .select(fromApp.getUser)
          .subscribe(result => (this.User = result));
      this.navlist = navcomponents;
    } else {
      this.store.dispatch(new actions.IsUnAuthenticated());
    }
    this.loggedin$ = this.store.select(fromApp.getIsAuthenticated);
  }


  Link(link: string) {
    if (link) {
      this.router.navigate([link]);
    }
  }

  logout() {
    this.userService.logout();
  }
}
