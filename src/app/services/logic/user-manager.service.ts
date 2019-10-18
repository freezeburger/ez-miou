import AppManager from '../@types/app-manager';
import AppUser, { AppUserStatus } from '../@types/app-user';


const MockUser: AppUser = {
    avatarUrl: 'http://robohash.org/CONSTANT',
    email: 'test@mail.com',
    id:69,
    name: 'CONSTANT',
    status: AppUserStatus.ONLINE
}

export class UserManager implements AppManager<AppUser> {
  create(options: any): Promise<AppUser> {
    return Promise.resolve(MockUser);
  }

  read(id: number): Promise<AppUser>;
  read(all: boolean): Promise<AppUser[]>;
  read(
    id?: number | undefined,
    all?: boolean | undefined
  ): Promise<AppUser | AppUser[]>;
  read(id?: any, all?: any): Promise<AppUser | AppUser[]> {
    if (typeof id === 'number') {
        return Promise.resolve(MockUser);        
    }
    return Promise.resolve([MockUser]);

  }
  update(target: AppUser, modifications: AppUser): Promise<AppUser> {
    return Promise.resolve(MockUser);
  }
  destroy(target: AppUser): Promise<AppUser> {
    return Promise.resolve(MockUser);
  }
  //ABstract
  public login(user: Partial<AppUser>) {}
  public logout(user: AppUser){}
}

export default UserManager;
