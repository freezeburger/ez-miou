interface AppManager<T> {

    create(options:any|T):Promise<T>;

    read(id:number):Promise<T>;
    read(all:boolean):Promise<T[]>;
    read(id?:number,all?:boolean):Promise<T|T[]>;
    
    update(target:T, modifications:T):Promise<T>;

    destroy(target:T):Promise<T>;
}

export default AppManager;

