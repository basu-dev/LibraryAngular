import { Global } from './../global/serverlinks';
import { Role } from './../Model/role';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RoleserviceService {
public data;
  Observable: any;
  constructor(public http:HttpClient) { }


public GetRole(id){
  return this.http.get(Global.EDIT_ROLE+id).pipe(
    map((data)=>this.data=data),
    catchError((error)=>this.handleError)
  )
  
}
public EditRole(id):Observable<Role>{
 return this.http.get<Role>(Global.GET_ALL_ROLES+id).pipe(
   map(response=>response),
   catchError(error=> this.handleError)
   
  )
  
}
public handleError(error){
  
  return this.Observable.throw(error);
}


}
