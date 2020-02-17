import { FormBuilder, Validators } from '@angular/forms';
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
  constructor(public route:ActivatedRoute,
    public router:Router,
    public service:RoleserviceService,
    public fb:FormBuilder
    ) { }
title:string;
btnText:string;
public createRoleForm;

  ngOnInit() {
    this.createRoleForm=this.fb.group({
      name:['',Validators.required]
    })
    this.title="Create New Role";
    this.btnText="Create";

  }
Submit(){
  let body={
    'name':this.createRoleForm.value.name
  }
  this.service.CreateRole(body).subscribe(
    result=>{console.log(result),
      this.router.navigate(['rolelist'])
    },
    err=>console.log(err)
  )

}
}
