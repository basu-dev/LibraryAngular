import { RoleListResolverService } from './Service/rolelist-resover.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import {EffectsModule} from "@ngrx/effects";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RoleserviceService } from 'src/app/Service/roleservice.service';

//Third Party Libraries
import {BsModalModule} from "ng2-bs3-modal"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers } from './app.reducer';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RegisterComponent } from './components/register/register.component';
import { CreateroleComponent } from './components/role/createrole/createrole.component';
import { EditroleComponent } from './components/role/editrole/editrole.component';
import { RolelistComponent } from './components/role/rolelist/rolelist.component';
import { TestComponent } from './components/test/test.component';
import { navcomponents } from './global/navcomponents';
import { TokenInterceptorService } from './guard/token-interceptor.service';
import { UserService } from './Service/user.service';

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
    StoreModule.forRoot({}),
    StoreModule.forFeature('appstate',reducers),
    // EffectsModule.
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
    BsModalModule
  ],
  providers: [
    { provide: 'NAVCOMPONENTS', useValue: navcomponents },
    UserService,
    RoleserviceService,
    RoleListResolverService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
