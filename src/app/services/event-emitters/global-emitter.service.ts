class GlobalEmitter {
    eventsSuscribed: {[key:string]:Array<Function>};
    constructor() {
        this.eventsSuscribed = {};
    }

    emit(eventName: string, payload: any): void{
        this.eventsSuscribed[eventName] && this.eventsSuscribed[eventName].forEach(cb => {
            setTimeout(() => cb(payload), 0);
        });
    }

    subscribe(eventName: string, cb: Function): boolean{
        if(typeof cb !== 'function') {
            throw Error('Cb is not a function');
        }
        if(this.eventsSuscribed[eventName] && this.eventsSuscribed[eventName].includes(cb)){
            return true;
        }
        if(this.eventsSuscribed[eventName]) {
            this.eventsSuscribed[eventName].push(cb);
        }
        this.eventsSuscribed[eventName] = [cb];
        return true
    }
    
}

export default new GlobalEmitter();