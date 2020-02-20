import { Observable } from 'rxjs';
import { Global } from './../global/serverlinks';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import { Role } from '../Model/role';


@Injectable({
  providedIn: 'root'
})
export class RoleserviceService {
public data;
  constructor(public http:HttpClient,public fb:FormBuilder) { }

public GetRole(id){
  return this.http.get(`${Global.EDIT_ROLE}/${id}`)
}
public CreateRole(body){
  return this.http.post<Role>(Global.CREATE_ROLE,body)
}
public EditRole(id,body){
let url=`${Global.EDIT_ROLE}/${id}`

 return this.http.post(url,body);
}
public DeleteRole(id){
  let url=`${Global.DELETE_ROLE}/${id}`
  return this.http.post(url,id)
}
public GetRoleWithUsers(){
  return this.http.get<Role[]>(Global.BASE_HOST_ENDPOINT)
}
}
