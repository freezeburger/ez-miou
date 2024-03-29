import AppDispatcher, {AppDispatcherAction, AppActionTypes} from "../@types/app-dispatcher";
import UserManager from "../logic/user-manager.service";

declare const window:any;

class Dispatcher implements AppDispatcher{

    private _history:any[] = [];

    private userService = UserManager;

    constructor() {
        console.warn(Date.now())
        window['getHistory'] = this.getHistory.bind(this)
    }

    getHistory() {
        console.table(this._history);
    }

    dispatch(action: AppDispatcherAction): Promise<AppDispatcherAction> {

        this._history.push( Object.assign({time:Date.now()},action))
        
        switch (action.type) {

            case AppActionTypes.USER_LOGIN:
                return this.userService
                            .login(action.data)
                            .then( res => {
                                action.result = res;
                                return action;
                            });

            case AppActionTypes.USER_LOGOUT:
                return Promise.resolve(action);

            case AppActionTypes.USER_LIST:
                return Promise.resolve(action);

            case AppActionTypes.USER_ROOM_ENTER:
                return Promise.resolve(action);

            case AppActionTypes.USER_ROOM_JOIN:
                return Promise.resolve(action);

            case AppActionTypes.USER_ROOM_LEAVE:
                return Promise.resolve(action);

            case AppActionTypes.ROOM_LIST:
                return Promise.resolve(action);

            case AppActionTypes.MESSAGE_INPUT:
                return Promise.resolve(action);

            case AppActionTypes.MESSAGE_RECEIVED:
                return Promise.resolve(action);

            case AppActionTypes.ROOM_CREATION_REQUEST:
                return Promise.resolve(action);

            case AppActionTypes.ROOM_SEARCH:
                return Promise.resolve(action);

            case AppActionTypes.NOTIFICATION:
                return Promise.resolve(action);
        }
    }

}


export default new Dispatcher();