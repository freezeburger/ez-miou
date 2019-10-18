interface AppDispatcher {
  dispatch(action: AppDispatcherAction): Promise<AppDispatcherAction>;
}

export interface AppDispatcherAction {
  type: AppActionTypes;
  data: any;
  result?: any;
}

export enum AppActionTypes {
  MESSAGE_INPUT = 'MESSAGE_INPUT',
  MESSAGE_RECEIVED = 'MESSAGE_RECEIVED',
  ROOM_CREATION_REQUEST = 'ROOM_CREATION_REQUEST',
  USER_LOGIN = 'USER_LOGIN',
  USER_LOGOUT = 'USER_LOGOUT',
  ROOM_SEARCH = 'ROOM_SEARCH',
  USER_JOIN_ROOM = 'USER_JOIN_ROOM',
  USER_ENTER_ROOM = 'USER_ENTER_ROOM'
}

export default AppDispatcher;
