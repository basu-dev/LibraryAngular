import { FormGroup } from '@angular/forms';
import { UserService } from './../../Service/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public service:UserService,public router:Router) { }
public message;
public passwordmarkup={
  mesasge:"",
  clicked:false,


}
public texttype='password';
public clicked:boolean;
  ngOnInit(
    
  ) 
  {
    this.service.loginModel.reset();
  }
  submit(){
    this.message=""
    this.service.login().subscribe(
      (result:any)=>{
        localStorage.setItem("userToken",result.token),
        localStorage.setItem("user",JSON.stringify(result.user)),
        this.router.navigate(["/rolelist"]);
      },
      error=>this.message=error.message
    )
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
