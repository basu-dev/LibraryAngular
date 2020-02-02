import { UserService } from './../../Service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public service:UserService) { }

  ngOnInit(
    
  ) {
    this.service.registerModel.value.UserName="BasuDev";
    this.service.registerModel.value.Password="BasuDev@123";
    this.service.registerModel.value.ConfirmPassword="BasuDev@123";
  }
  submit(){
    console.log(this.service.registerModel);
    this.service.register().subscribe(
      (result:any)=>console.log(result),
      error=>console.log(error)
    )
  }

}
