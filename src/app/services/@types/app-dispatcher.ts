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

    USER_JOIN_ROOM = 'USER_JOIN_ROOM',
    USER_LEAVE_ROOM = 'USER_LEAVE_ROOM',
    ROOM_SEARCH = 'ROOM_SEARCH',
    ROOM_CREATION_REQUEST = 'ROOM_CREATION_REQUEST',
    USER_ENTER_ROOM = 'USER_ENTER_ROOM',
    //SUBSYSTEM
    ROOM_LIST = 'ROOM_LIST',

    MESSAGE_INPUT = 'MESSAGE_INPUT',
    MESSAGE_RECEIVED = 'MESSAGE_RECEIVED',
    //SYSTEM - SUBSYSTEM
    NOTIFICATION = 'NOTIFICATION',

}

export default AppDispatcher;