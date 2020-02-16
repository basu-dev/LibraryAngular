import { User } from './Model/user';
import { Action, ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from "./store/auth/auth.reducer"
import * as fromUser from "./store/login/login.reducer"

export interface State{
    auth: fromAuth.State,
    user:fromUser.State
}

export const reducers: ActionReducerMap<State>={
    auth:fromAuth.authReducer,
    user:fromUser.userReducer 
}

export const getAuthState= createFeatureSelector<fromAuth.State>('auth')
export const getIsAuthenticated = createSelector(getAuthState,fromAuth.getAuthenticated)

export const getUserState= createFeatureSelector<fromUser.State>('user')
export const getUser = createSelector(getUserState,fromUser.user)
