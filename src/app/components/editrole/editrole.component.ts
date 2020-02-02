import { RoleserviceService } from './../../Service/roleservice.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editrole',
  templateUrl: './editrole.component.html',
  styleUrls: ['./editrole.component.css']
})
export class EditroleComponent implements OnInit {
  id$: any;
  data: any;
  
  constructor(public route:ActivatedRoute,public service:RoleserviceService) { }
  public title="Edit Role";
  public btnText="Save";
  ngOnInit() {
    this.id$=this.route.snapshot.paramMap.get('id');
    console.log(this.id$);
     this.data=this.service.GetRole(this.id$);
      
     
  }
  Submit(){
    this.data=this.service.GetRole(this.id$);
    console.log(this.data.name);
    
  }

}
