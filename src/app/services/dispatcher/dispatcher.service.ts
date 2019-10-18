import AppDispatcher, { AppDispatcherAction, AppActionTypes } from "../@types/app-dispatcher";
import UserManager from '../../services/logic/user-manager.service';

// Small hack to allow using window in TS knowning that it will exist at runtime
declare const window:any;

class Dispatcher implements AppDispatcher {
    private _history: any[] = [];

    private userManager = UserManager;

    constructor() {
        window['getHistory'] = this.getHistory.bind(this);
    }

    getHistory() {
        console.table(this._history);
    }

    dispatch(action: AppDispatcherAction): Promise<AppDispatcherAction> {
        this._history.push(Object.assign({time: Date.now()}, action));

        switch (action.type) {
            case AppActionTypes.USER_LOGIN:
                return this.userManager
                    .login(action.data)
                    .then(result => {
                        action.result = result;
                        return action;
                    }
                );
            case AppActionTypes.USER_LOGOUT:
                return Promise.resolve(action);
            case AppActionTypes.USER_LIST:
                return Promise.resolve(action);
            case AppActionTypes.USER_ROOM_LEAVE:
                return Promise.resolve(action);
            case AppActionTypes.USER_ROOM_JOIN:
                return Promise.resolve(action);
            case AppActionTypes.USER_ROOM_ENTER:
                return Promise.resolve(action);
            case AppActionTypes.MESSAGE_INPUT:
                return Promise.resolve(action);
            case AppActionTypes.MESSAGE_RECEIVED:
                return Promise.resolve(action);
            case AppActionTypes.ROOM_CREATION_REQUEST:
                return Promise.resolve(action);
            case AppActionTypes.ROOM_SEARCH:
                return Promise.resolve(action);
            case AppActionTypes.ROOM_LIST:
                return Promise.resolve(action);
            case AppActionTypes.NOTIFICATION:
                return Promise.resolve(action);
        }
    }
}

// Create a singleton: only one instance will be created in this module, and as every module
// is only loaded one time, then there will be only one instance of Dispatcher and no
// other mean to create a new one because the constructor is not accessible
export default new Dispatcher();