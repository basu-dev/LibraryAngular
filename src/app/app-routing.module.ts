import { RoleListResolverService } from './Service/rolelist-resover.service';
import { LoginGuard } from './guard/login.guard';
import { TestComponent } from './components/test/test.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AuthGuard } from './guard/auth.guard';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { EditroleComponent } from './components/role/editrole/editrole.component';
import { CreateroleComponent } from './components/role/createrole/createrole.component';
import { RolelistComponent } from './components/role/rolelist/rolelist.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "", redirectTo: "/rolelist", pathMatch: "full" },
  { path: "rolelist",
   component: RolelistComponent,
    canActivate: [AuthGuard] ,
    resolve:{roleList:RoleListResolverService}
  },
  {
    path: "createrole",
    component: CreateroleComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "editrole/:id",
    component: EditroleComponent,
    canActivate: [AuthGuard]
  },
  { path: "register", component: RegisterComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent, canActivate: [LoginGuard] },
  { path: "test", component: TestComponent },

  { path: "**", component: NotfoundComponent }
  //  {path:"**",redirectTo:"/404",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
