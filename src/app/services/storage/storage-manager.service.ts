import AppManager from '../@types/app-manager';

export class StorageManager implements AppManager<any> {
    create(options: any): Promise<any> {
        throw new Error("Method not implemented.");
    }    
    read(id: number): Promise<any>;
    read(all: boolean): Promise<any[]>;
    read(id?: number | undefined, all?: boolean | undefined): Promise<any>;
    read(id?: any, all?: any): Promise<any> {
        let url = 'http://localhost:5050/users';
        if (typeof id === 'number') {
            url += '/' + id;
        }
        return fetch(url).then(response => response.json()).catch(err => console.log('NOPE ERROR INNER FETCH'));
    }
    update(target: any, modifications: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    destroy(target: any): Promise<any> {
        throw new Error("Method not implemented.");
    }

  
}

export default new StorageManager();
