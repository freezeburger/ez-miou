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
        const user:AppUser = {
            avatarUrl: MockUser.avatarUrl,
            email: options.email || MockUser.email,
            id: MockUser.id,
            name: MockUser.name,
            status: MockUser.status
        }
        return Promise.resolve(user);
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

    public login(user:Partial<AppUser>): Promise<AppUser> {
        return Promise.resolve(MockUser);
    }

    public logout(user: Partial<AppUser>): Promise<AppUser> {
        return Promise.resolve(MockUser);
    }
}

const userManager = new UserManager();
export default userManager;