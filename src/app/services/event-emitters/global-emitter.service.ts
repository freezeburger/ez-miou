
class EventEmitter{
    
    _callbacks:{[key:string]:Array<Function>} = {};

    emit(eventName:string, payload:any):void{
        this._callbacks[eventName] && this._callbacks[eventName].forEach( cb => {
            setTimeout( ()=> cb(payload) , 0 );  
        });
    }

    subscribe(eventName:string, callback:Function):boolean{

        if( typeof callback !== 'function' ){
            throw Error('callback is not a function');
        }

        if(this._callbacks[eventName] && this._callbacks[eventName].includes(callback) ){
            return true;
        }

        if(this._callbacks[eventName]){
            this._callbacks[eventName].push(callback);
            
        }else{
            this._callbacks[eventName] = [callback];
        }
        return true;
    }
}

const globalEmitter = new EventEmitter();

export default globalEmitter;