import { UserService } from './../../Service/user.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions ,createEffect,Effect, ofType} from '@ngrx/effects';
import * as userAction from "../actions/index";
import { switchMap, catchError, map,mergeMap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';


@Injectable()

export class UserEffects{
    constructor(public actions$:Actions,public http:HttpClient,public userService:UserService){}

// loadUser$ = createEffect(() => {
//     return this.actions$.pipe(
//             ofType(userAction.UserActionTypes.LOAD_DATA)
//             ),
//             mergeMap(()=>{
//                 return this.userService.getUser().pipe(
//                     map(user=>new userAction.loadDataSuccess(user)),
//                     catchError(err=>of(new userAction.loadDataFailure(err)))
//                 )
//             })
    
// });
}