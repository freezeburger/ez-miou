import AppManager from "../@types/app-manager";
import AppUser, { AppUserStatus } from "../@types/app-user";

const MockUser: AppUser = {
  id: 1,
  name: "zorb1",
  email: "toto@tii.fr",
  status: AppUserStatus.BUSY
};

export class UserManager implements AppManager<AppUser> {
  public create(options: any): Promise<AppUser> {
    return Promise.resolve(MockUser);
  }
  read(id: number): Promise<AppUser>;
  read(all: boolean): Promise<AppUser[]>;
  read(
    id?: number | undefined,
    all?: boolean | undefined
  ): Promise<AppUser | AppUser[]>;
  public read(id?: any, all?: any): Promise<AppUser | AppUser[]> {
    if (typeof id === 'number') {
        return Promise.resolve(MockUser);
    }
    return Promise.resolve([MockUser]);
  }
  public update(target: AppUser, modifications: AppUser): Promise<AppUser> {
    throw new Error("Method not implemented.");
  }
  public destroy(target: AppUser): Promise<AppUser> {
    throw new Error("Method not implemented.");
  }

  //
  public login(user: Partial<AppUser>) {}

  public logout(user: AppUser) {}
}

export default UserManager;
