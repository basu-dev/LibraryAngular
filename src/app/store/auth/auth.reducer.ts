import { ActionTypes, authActions } from './auth.action';

export interface State{
    IsAuthenticated:boolean
}
const initialState:State ={
    IsAuthenticated:false
}

export function authReducer(state=initialState,action:authActions){
    switch(action.type){
        case( ActionTypes.IS_AUTHENTICATED ):
            return {
                IsAuthenticated:true
            }
        case(ActionTypes.IS_UNAUTHENTICATED):
        return {
            IsAuthenticated:false
        }
        default:
            return state
        
    }
}

export const getAuthenticated=(state:State)=>state.IsAuthenticated