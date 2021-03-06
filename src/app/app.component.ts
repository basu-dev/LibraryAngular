import { async } from "@angular/core/testing";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import * as jwtdecode from "jwt-decode";
import { Observable } from "rxjs";

import * as fromApp from "./app.reducer";
import { navcomponents } from "./global/navcomponents";
import { User } from "./Model/user";
import { UserService } from "./Service/user.service";
import * as actions from "./store/actions/index";

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
  ) {}

  ngOnInit(): void {
    var result = this.userService.getToken();
    if (result != null) {
      this.store.dispatch(new actions.IsAuthenticated()),
      this.userService.getUser().subscribe(
        result=>this.store.dispatch(
          new actions.loadDataSuccess(result)
        ),
      )
        // this.store.dispatch(
        //   new actions.loadDataSuccess({
        //     UserName: "BasuDev",
        //     Email: "alsdkfjlf"
        //   })
        // ),
        this.store
          .select(fromApp.getUser)
          .subscribe(result => (this.User = result));
      this.navlist = navcomponents;
    } else {
      this.store.dispatch(new actions.IsUnAuthenticated());
    }
    this.loggedin$ = this.store.select(fromApp.getIsAuthenticated);
  }
  public loggedin$: Observable<boolean>;
  User: User;
  navlist;
  title = "library";
  public opened = true;
  Link(link: string) {
    if (link) {
      this.router.navigate([link]);
    }
  }
  logout() {
    this.userService.logout();
  }
}
