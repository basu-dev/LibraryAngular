import { Router } from '@angular/router';
import { UserService } from './../../Service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(public service:UserService,public router:Router) { }

  ngOnInit() {

  }
  test(){
    this.service.test().subscribe(
      data=>console.log("Data:",data),
      error=>console.log("Erro from comp::",error)
    )
  }

}
