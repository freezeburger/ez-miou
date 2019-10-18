interface AppDispatcher {

    dispatch(action:AppDispatcherAction):Promise<AppDispatcherAction>;

}

export interface AppDispatcherAction {
    
    type:AppActionTypes;
    data:any;
    result?:any;

}

export enum AppActionTypes {
    MESSAGE_INPUT = 'MESSAGE_INPUT',
    MESSAGE_RECEIVED = 'MESSAGE_RECEIVED',
    NOTIFICATION = 'NOTIFICATION',
    ROOM_CREATION_REQUEST = 'ROOM_CREATION_REQUEST',
    ROOM_LIST = 'ROOM_LIST',
    ROOM_SEARCH = 'ROOM_SEARCH',
    USER_LIST = 'USER_LIST',
    USER_LOGIN = 'USER_LOGIN',
    USER_LOGOUT = 'USER_LOGOUT',
    USER_ROOM_ENTER = 'USER_ROOM_ENTER',
    USER_ROOM_JOIN = 'USER_ROOM_JOIN',
    USER_ROOM_LEAVE = 'USER_ROOM_LEAVE'
}

export default AppDispatcher;