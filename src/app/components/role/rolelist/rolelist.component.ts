import { Global } from "./../../../global/serverlinks";

import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router, ActivatedRoute } from "@angular/router";
import { RoleserviceService } from "src/app/Service/roleservice.service";
@Component({
  selector: "app-rolelist",
  templateUrl: "./rolelist.component.html",
  styleUrls: ["./rolelist.component.css"]
})
export class RolelistComponent implements OnInit {
  public data: any;
  public error: any;
  public name: string;
  constructor(
    public http: HttpClient,
    public router: Router,
    public route: ActivatedRoute,
    public service: RoleserviceService
  ) {}

  ngOnInit() {
    let result = this.http
      .get<Observable<any>[]>(Global.GET_ALL_ROLES)
      .subscribe(
        data => {
          this.data = data;
        },

        error => console.log(error)
      );
  }
  showResult() {
    console.log(
      this.http.get<Observable<any>[]>(Global.BASE_HOST_ENDPOINT).subscribe(
        data => {
          (this.data = data), console.log(data);
        },
        error => {
          (this.error = error), console.log(error);
        }
      )
    );
  }

  EditRole(id) {
    let role;
    this.service.GetRole(id).subscribe(res => {
      (role = res),
        console.log("Role found:" + role),
        this.router.navigate([
          "editrole",
          id],{queryParams:{name:role.name}}),
      err => console.log(err);
    });
   
  }
  DeleteRole(id,index){
    let role;
    this.service.GetRole(id).subscribe(
      result=>{
        this.service.DeleteRole(id).subscribe(
          result=>{
            console.log(result)
            this.data.splice(index)
          },
          err=>console.log(err)
        )
      }
    )
  }
}
