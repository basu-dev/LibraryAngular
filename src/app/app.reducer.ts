import { User } from './Model/user';
import { Action, ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from "./store/reducers/auth.reducer"
import * as fromUser from "./store/reducers/login.reducer"

export interface State{
    auth: fromAuth.State,
    user:fromUser.State
}

export const reducers: ActionReducerMap<State>={
    auth:fromAuth.authReducer,
    user:fromUser.userReducer 
}
export const getState=createFeatureSelector<State>('appstate')

//IsAuthenticatedState
export const getAuthState=createSelector(
    getState,
    (state:State)=>state.auth
)
export const getIsAuthenticated = createSelector(getAuthState,
    fromAuth.getAuthenticated
    )

//UserState
export const getUserState=createSelector(
    getState,
    (state:State)=>state.user
)
export const getUser=createSelector(
    getUserState,
    fromUser.user
)
export const getLoading=createSelector(
    getUserState,
    fromUser.user
)
export const getLoaded=createSelector(
    getUserState,
    fromUser.user
)