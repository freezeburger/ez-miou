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
    USER_LOGOUT = 'USER_LOGOUT',
    USER_LIST = 'USER_LIST',

    USER_ROOM_JOIN = 'USER_ROOM_JOIN',
    USER_ROOM_LEAVE = 'USER_ROOM_LEAVE',
    USER_ROOM_ENTER = 'USER_ROOM_ENTER',
    ROOM_CREATION_REQUEST = 'ROOM_CREATION_REQUEST ',
    ROOM_SEARCH = 'ROOM_SEARCH',
    // Sub Fonctionnal
    ROOM_LIST = 'ROOM_LIST',

    MESSAGE_INPUT = 'MESSAGE_INPUT',
    MESSAGE_RECEIVED = 'MESSAGE_RECEIVED',

    // System
    NOTIFICATION = 'NOTIFICATION',
}

export default AppDispatcher;