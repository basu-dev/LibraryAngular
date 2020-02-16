import { Action } from '@ngrx/store';

export const ActionTypes={

  IS_AUTHENTICATED : '[NameSpace] Is Authenticated',
  IS_UNAUTHENTICATED : '[NameSpace] Is UnAuthenticated',


}

export class IsAuthenticated implements Action {
  readonly type = ActionTypes.IS_AUTHENTICATED;

}
export class IsUnAuthenticated implements Action {
  readonly type = ActionTypes.IS_UNAUTHENTICATED;

}
export type authActions=IsAuthenticated  | IsUnAuthenticated