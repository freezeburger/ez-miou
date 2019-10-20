import AppManager from "../@types/app-manager";

class StorageManager implements AppManager<any>{

    create(options: any): Promise<any> {
        throw new Error("Method not implemented.");
    }   
    
    read(id: number): Promise<any>;
    read(all: boolean): Promise<any[]>;
    read(id?: number, all?: boolean): Promise<any>;
    read(id?: any, all?: any):any|any[] {
        let URL = 'http://localhost:5050/users'
        if( typeof id === 'number'){
            URL += '/' + id;
        }
        return fetch(URL).then(response => response.json()).catch( err => console.log('INNER FETCH ERROR'))
    }
    update(target: any, modifications: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    destroy(target: any): Promise<any> {
        throw new Error("Method not implemented.");
    }



}

const storage = new StorageManager();

export default storage ;