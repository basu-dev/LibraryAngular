import { RoleserviceService } from './../../../Service/roleservice.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  ngOnInit() {
    this.editForm=this.fb.group({
      name:[""],
      Id:[""]
    })          
    this.id$=this.route.snapshot.paramMap.get('id');
     this.data=this.service.GetRole(this.id$).subscribe(
       (result:Role)=>{
         this.editForm.value.name=result.name,
         this.editForm.value.Id=result.id
        err=>console.log(err)
       }
     );

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
