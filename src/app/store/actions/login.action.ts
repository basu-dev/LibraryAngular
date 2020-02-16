import { User } from 'src/app/Model/user'


export const UserActionTypes={
    LOAD_DATA:'[User] Loading Data',
    LOAD_DATA_SUCCESS:'[User] Loading Data Success',
    LOAD_DATA_FAILURE:'[User] Loading Data Failure'
}
export class loadData{
    readonly type=UserActionTypes.LOAD_DATA
}
export class loadDataSuccess{
    readonly type=UserActionTypes.LOAD_DATA_SUCCESS
    constructor(public payload:User){}
}
export class loadDataFailure{
    readonly type=UserActionTypes.LOAD_DATA_FAILURE
    constructor(public payload:any){}
}

export type userAction = loadData | loadDataFailure | loadDataSuccess