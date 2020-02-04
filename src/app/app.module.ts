import { RoleserviceService } from 'src/app/Service/roleservice.service';
import { UserService } from './Service/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RolelistComponent } from './components/rolelist/rolelist.component';
import {HttpClientModule} from "@angular/common/http";
import { CreateroleComponent } from './components/createrole/createrole.component';
import { RouterModule } from '@angular/router';
import { EditroleComponent } from './components/editrole/editrole.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
// import { RoleComponent } from './Model/role/role.component';

@NgModule({
  declarations: [
    AppComponent,
    RolelistComponent,
    CreateroleComponent,
    EditroleComponent,
    LoginComponent,
    RegisterComponent,
    // RoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    UserService,
    RoleserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
