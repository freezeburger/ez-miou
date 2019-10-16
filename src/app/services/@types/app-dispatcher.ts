interface AppDispatcher {

    dispatch(action:AppDispatcherAction):Promise<AppDispatcherAction>;

}

export interface AppDispatcherAction {
    
    type:AppActionTypes;
    data:any;
    result?:any;

}

export enum AppActionTypes {

}

export default AppDispatcher;