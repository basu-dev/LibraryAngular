import { UserService } from './../../Service/user.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public service:UserService,public router:Router,public route:ActivatedRoute) { 
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'rolelist';
  }
public message:string;
public passwordmarkup={
  mesasge:"",
  clicked:false,
}
public texttype='password';
public clicked:boolean;
public returnUrl:string;
  ngOnInit( ) 
  {
    this.service.loginModel.reset();
  }
  submit(){
    this.message=""
    this.service.setToken("sdf");
    this.router.navigateByUrl(this.returnUrl)

  }
  public showPassword(object:any){
    if(!this.clicked){
      this.clicked=true;
      this.texttype="text"
    }
    else{
      this.texttype="password";
      this.clicked=false;
    }
    
  }


}
