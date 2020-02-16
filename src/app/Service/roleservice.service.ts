import { Global } from './../global/serverlinks';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {FormBuilder} from "@angular/forms";


@Injectable({
  providedIn: 'root'
})
export class RoleserviceService {
public data;
  constructor(public http:HttpClient,public fb:FormBuilder) { }

public GetRole(id){
  return this.http.get(`${Global.EDIT_ROLE}/${id}`)
}
public EditRole(id,body){
let url=`${Global.EDIT_ROLE}/${id}`
console.log(url)
 return this.http.post(url,body);
}
}
