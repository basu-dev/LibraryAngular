import { RoleserviceService } from './../../Service/roleservice.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Role } from 'src/app/Model/role';

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
     this.data=this.service.GetRole(this.id$).subscribe(
       (result:Role)=>console.log(result)
     );
      
     
  }
  Submit(){
    this.data=this.service.GetRole(this.id$);
    console.log(this.data.name);
    
  }

}
