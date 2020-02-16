import { HeaderComponent } from './components/header/header.component';
import { TokenInterceptorService } from './guard/token-interceptor.service';
import { RoleserviceService } from 'src/app/Service/roleservice.service';
import { UserService } from './Service/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RolelistComponent } from './components/role/rolelist/rolelist.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { CreateroleComponent } from './components/role/createrole/createrole.component';
import { RouterModule } from '@angular/router';
import { EditroleComponent } from './components/role/editrole/editrole.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotfoundComponent } from './components/notfound/notfound.component';
import{MatSidenavModule} from '@angular/material/sidenav';
import{MatToolbarModule} from "@angular/material/toolbar";
import{MatMenuModule} from "@angular/material/menu";
import{MatCardModule} from "@angular/material/card";
import{MatIconModule} from "@angular/material/icon";
import { TestComponent } from './components/test/test.component';
import { navcomponents } from "./global/navcomponents";
import {reducers} from "./app.reducer"
import { StoreModule} from '@ngrx/store';
import { StoreDevtoolsModule } from "@ngrx/store-devtools"

// import { RoleComponent } from './Model/role/role.component';

@NgModule({
  declarations: [
    AppComponent,
    RolelistComponent,
    CreateroleComponent,
    EditroleComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    TestComponent,
    HeaderComponent
    // RoleComponent
  ],
  imports: [
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule,
   
    
  ],
  providers: [
    { provide: 'NAVCOMPONENTS', useValue: navcomponents },

    UserService,
    RoleserviceService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
