import { IsAuthenticated } from './../../store/actions/auth.action';
import { UserService } from "./../../Service/user.service";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Store } from "@ngrx/store";
import * as fromApp from "../../app.reducer";
import * as actions from "../../store/actions/index";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(
    public service: UserService,
    public router: Router,
    public route: ActivatedRoute,
    public store: Store<fromApp.State>
  ) {
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "rolelist";
  }
  public message: string;
  public passwordmarkup = {
    mesasge: "",
    clicked: false
  };
  public texttype = "password";
  public clicked: boolean;
  public returnUrl: string;
  ngOnInit() {
    // this.service.loginModel.reset();
    //this.service.loginModel.reset();
  }
  submit() {
    this.message = "";
    this.service.login().subscribe(
      result => {
        console.log(result),
          this.store.dispatch(new actions.loadDataSuccess(result.user)),
          this.service.setToken(result.token)
          this.store.dispatch(new actions.IsAuthenticated),
          this.router.navigateByUrl(this.returnUrl);
      },
      error => (this.message = error)
    );
    // this.service.setToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");
  }
  public showPassword(object: any) {
    if (!this.clicked) {
      this.clicked = true;
      this.texttype = "text";
    } else {
      this.texttype = "password";
      this.clicked = false;
    }
  }
}
