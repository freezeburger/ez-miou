interface AppDispatcher {

    dispatch(action:AppDispatcherAction):Promise<AppDispatcherAction>;

}

export interface AppDispatcherAction {
    
    type:AppActionTypes;
    data:any;
    result?:any;

}

export enum AppActionTypes {
    USER_LOGIN = 'USER_LOGIN',
    USER_ROOM_ENTER = 'USER_ROOM_ENTER'
}

export default AppDispatcher;