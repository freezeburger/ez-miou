import AppManager from "../@types/app-manager";
import AppUser, { AppUserStatus } from "../@types/app-user";
import StorageManager from '../storage/storage-manager.service'

const MockUser: AppUser = {
  avatarUrl: 'http://robohash.org/bobo',
  email: 'bob@bob.vob',
  id: 1,
  name: 'bob',
  status: AppUserStatus.ONLINE
};

export class UserManager implements AppManager<AppUser> {
  public create(options: any): Promise<AppUser> {
    Promise.resolve(MockUser);
  }

class UserManager implements AppManager<AppUser>{

    private storage = StorageManager

    public create(options: any): Promise<AppUser> {
        return Promise.resolve(MockUser);
    }   
    
    public read(id: number): Promise<AppUser>;
    public read(all: boolean): Promise<AppUser[]>;
    public read(id?: number, all?: boolean): Promise<AppUser | AppUser[]>;
    public read(id?: any, all?: any): Promise<AppUser | AppUser[]> {
        if(typeof id === 'number') {
            return Promise.resolve(MockUser);
        }
        return Promise.resolve([MockUser]);
    }
  }

    public update(target: AppUser, modifications: AppUser): Promise<AppUser> {
        return Promise.resolve(MockUser);
    }

    public destroy(target: AppUser): Promise<AppUser> {
        return Promise.resolve(MockUser);
    }

  // Abstraction

    public login(user:Partial<AppUser>) {

        this.storage.read(undefined,true).then( data => console.table(data))

        return Promise.resolve(MockUser);
    }

    public logout(user:AppUser) {
        return Promise.resolve(MockUser);
    }


}

const manager = new UserManager();

export default manager ;