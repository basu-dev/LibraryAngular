import { RoleserviceService } from './roleservice.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Role } from '../Model/role';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from '../global/serverlinks';
@Injectable()

export class RoleListResolverService implements Resolve<Role[]>{
    constructor(public service:RoleserviceService,public http:HttpClient){}

  resolve(route: ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<Role[]>{
      return this.http.get<Role[]>(Global.BASE_HOST_ENDPOINT)
  }
}