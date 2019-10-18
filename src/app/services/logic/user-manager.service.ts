import AppManager from '../@types/app-manager';
import AppUser, { AppUserStatus } from '../@types/app-user';

const MockUser: AppUser = {
  id: 0,
  name: 'toto',
  avatarUrl: 'http://www.google.com',
  email: 'toto@toto.fr',
  status: AppUserStatus.ONLINE
};
export class UserManager implements AppManager<AppUser> {
  create(options: any): Promise<AppUser> {
    throw new Error('Method not implemented.');
  }

  read(id: number): Promise<AppUser>;
  read(all: boolean): Promise<AppUser[]>;
  read(id?: number | undefined, all?: boolean | undefined): Promise<AppUser | AppUser[]>;
  read(id?: any, all?: any): Promise<AppUser | AppUser[]> {
    if (typeof id === 'number') {
      return Promise.resolve(MockUser);
    }
    return Promise.resolve(MockUser);
    throw new Error('Method not implemented.');
  }
  update(target: AppUser, modifications: AppUser): Promise<AppUser> {
    throw new Error('Method not implemented.');
  }
  destroy(target: AppUser): Promise<AppUser> {
    throw new Error('Method not implemented.');
  }
}
