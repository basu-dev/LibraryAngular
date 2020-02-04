import { NotfoundComponent } from './components/notfound/notfound.component';
import { AuthGuard } from './guard/auth.guard';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { EditroleComponent } from './components/editrole/editrole.component';
import { CreateroleComponent } from './components/createrole/createrole.component';
import { RolelistComponent } from './components/rolelist/rolelist.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:"",redirectTo:"/rolelist",pathMatch:"full"},
 {path:("rolelist"),component:RolelistComponent,canActivate:[AuthGuard]} ,
 {path:("createrole"),component:CreateroleComponent,canActivate:[AuthGuard]} ,
 {path:("editrole/:id"),component:EditroleComponent,canActivate:[AuthGuard]},
 {path:("register"),component:RegisterComponent,canActivate:[AuthGuard]},
 {path:("login"),component:LoginComponent},

 
 {path:"404",component:NotfoundComponent},
 {path:"**",redirectTo:"/404",pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
