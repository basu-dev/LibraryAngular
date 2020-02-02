import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { EditroleComponent } from './components/editrole/editrole.component';
import { CreateroleComponent } from './components/createrole/createrole.component';
import { RolelistComponent } from './components/rolelist/rolelist.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:"",redirectTo:"/rolelist",pathMatch:"full"},
 {path:("rolelist"),component:RolelistComponent} ,
 {path:("createrole"),component:CreateroleComponent} ,
 {path:("editrole/:id"),component:EditroleComponent},
 {path:("register"),component:RegisterComponent},
 {path:("login"),component:LoginComponent},

 
 {path:"404",component:RolelistComponent},
 {path:"**",redirectTo:"/404",pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
