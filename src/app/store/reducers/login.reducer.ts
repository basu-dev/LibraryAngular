import { User } from './../../Model/user';
import { userAction, UserActionTypes } from "../actions/index";
import * as UserAction from "../actions/index";
import { createFeatureSelector } from "@ngrx/store";

export interface State{
    
    user:User,
    loading:boolean,
    loaded:boolean
}
export const initialState:State={
    user:
      {
        UserName:"Basu"
      },
    
    loaded:false,
    loading:false,

}

export function userReducer(state=initialState,action:userAction):State{
    switch(action.type){
        case( UserAction.UserActionTypes.LOAD_DATA):
        return {
          ...state,
          loading:true,
          
        }
        case( UserAction.UserActionTypes.LOAD_DATA_FAILURE):
        return {
          ...state,
          loading:false,
          loaded:false,
        
        }
        case( UserAction.UserActionTypes.LOAD_DATA_SUCCESS):
        return {
          ...state,
          loading:false,
          loaded:true,

        }
      
    default:
        return state
    
}
}

export const user=(state:State)=>state.user
export const loading=(state:State)=>state.loading
export const loaded=(state:State)=>state.loaded
