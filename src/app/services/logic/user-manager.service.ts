import AppManager from "../@types/app-manager";
import AppUser, { AppUserStatus } from "../@types/app-user";

const MockUser:AppUser = {
    avatarUrl:'http://robohash.org/bob',
    email:'bob@bob.bob',
    id:1,
    name:'Bob',
    status: AppUserStatus.ONLINE
}

class UserManager implements AppManager<AppUser> {

    create(options: any): Promise<AppUser> {
        return Promise.resolve(MockUser);
    }    
    
    read(id: number): Promise<AppUser>;
    read(all: boolean): Promise<AppUser[]>;
    read(id?: number | undefined, all?: boolean | undefined): Promise<AppUser | AppUser[]>;

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


    // Abstraction

    public login(user:Partial<AppUser>){}
    public logout(user: Partial<AppUser>) {}
}

export default UserManager;