import { RoleserviceService } from './../../../Service/roleservice.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Role } from 'src/app/Model/role';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-editrole',
  templateUrl: './editrole.component.html',
  styleUrls: ['./editrole.component.css']
})
export class EditroleComponent implements OnInit {
  id$: any;
  data: any;
  
  constructor(public route: ActivatedRoute,
    public service: RoleserviceService,
    public fb: FormBuilder,
    public router:Router
    ) 
    { }
  public title="Edit Role";
  public btnText="Save";
  public editForm;
  public rolename:string;
  public name$;
  ngOnInit() {
    this.id$=this.route.snapshot.paramMap.get('id');
    this.route.queryParams.subscribe(
      params=>this.name$=params['name']
    )
    this.editForm=this.fb.group({
      name:[this.name$],
      Id:[""]
    })          
  }
  Submit(){
   let body={
    "id":this.id$,
     "name":this.editForm.value.name,
     "users":[]

   }
   console.log(body);
   this.service.EditRole(this.id$,body).subscribe(
    (result:Role)=>{
      console.log(`Update successful with name ${result.name}`),
      this.router.navigate(['/'])
      this.editForm.reset()
    },
    (error)=>console.error(error)
    )
    
  }

}
