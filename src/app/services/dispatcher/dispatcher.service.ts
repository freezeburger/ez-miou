import AppDispatcher, { AppDispatcherAction, AppActionTypes } from '../@types/app-dispatcher';
declare const window: any;
class Dispatcher implements AppDispatcher {
  private _history: any[] = [];

  constructor() {
    window['getHistory'] = this.getHistory.bind(this);
  }

  getHistory() {
    console.table(this._history);
  }
  dispatch(action: AppDispatcherAction): Promise<AppDispatcherAction> {
    this._history.push(Object.assign({ time: Date.now() }, action));
    switch (action.type) {
      case AppActionTypes.MESSAGE_INPUT:
        return Promise.resolve(action);
      case AppActionTypes.MESSAGE_RECEIVED:
        return Promise.resolve(action);
      case AppActionTypes.ROOM_CREATION_REQUEST:
        return Promise.resolve(action);
      case AppActionTypes.ROOM_SEARCH:
        return Promise.resolve(action);
      case AppActionTypes.USER_LOGIN:
        return Promise.resolve(action);
    }
    return Promise.resolve(action);
  }
}

export default Dispatcher;
