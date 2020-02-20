import { UserService } from './../../Service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public service:UserService) { }
public message;
public clicked:boolean=false;
public texttype='password'
  ngOnInit(
    
  ) {
   
  }
  submit(){
    this.message=""; 
    this.service.register().subscribe(
      (result:any)=>{
        localStorage.setItem("userToken",result.token),
        localStorage.setItem("user",JSON.stringify(result.user));
        this.message="User Created Successfully"

      },
      error=>this.message=error.message
    )
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
