import { UserService } from './../../Service/user.service';
import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public service:UserService) { }
public message;

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

}
