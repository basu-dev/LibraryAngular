import { RoleserviceService } from './../../../Service/roleservice.service';
import { Router, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-createrole',
  templateUrl: './createrole.component.html',
  styleUrls: ['./createrole.component.css']
})
export class CreateroleComponent implements OnInit {
  constructor(public route:ActivatedRoute,public router:Router,public service:RoleserviceService) { }
public title="Create New Role";
public btnText="Create";
public data;

  ngOnInit() {
    
  }
Submit(){
  console.log("submtted");

}
}
