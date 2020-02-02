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
    this.service.registerModel.reset();
  }
  submit(){
    this.service.register().subscribe(
      (result:any)=>console.log(result),
      error=>console.log(error)
    )
  }

}
