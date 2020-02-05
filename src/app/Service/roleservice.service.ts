import { Global } from './../global/serverlinks';
import { Role } from './../Model/role';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {FormBuilder} from "@angular/forms";


@Injectable({
  providedIn: 'root'
})
export class RoleserviceService {
public data;
  constructor(public http:HttpClient,public fb:FormBuilder) { }


public GetRole(id){
  return this.http.get(Global.EDIT_ROLE+id)
 
}
public EditRole(id):Observable<Role>{
 return this.http.get<Role>(Global.GET_ALL_ROLES)

  
}



}
