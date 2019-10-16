interface AppStorage<T> {

    load(options:any):Promise<T>;
    save(data:T):Promise<T>;

}
export default AppStorage;