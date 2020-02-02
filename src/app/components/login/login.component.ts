import { FormGroup } from '@angular/forms';
import { UserService } from './../../Service/user.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public service:UserService) { }

  ngOnInit(
    
  ) 
  {
    this.service.loginModel.reset();
  }
  submit(){
    this.service.login().subscribe(
      (result:any)=>console.log("from component ::"+result),
      error=>console.log(error)
    )
  }


}
