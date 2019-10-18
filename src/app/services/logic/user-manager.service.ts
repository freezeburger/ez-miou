import AppUser, { AppUserStatus } from "../@types/app-user";
import AppManager from "../@types/app-manager";

const mockUser: AppUser = {
    id: 0,
    name: "Mock",
    email: "mock@mock.com",
    avatarUrl: "https://mock.com/mock.jpg",
    status: AppUserStatus.OFFLINE
}

class UserManager implements AppManager<AppUser> {
    
    public create(options: any): Promise<AppUser> {
        return Promise.resolve(mockUser);
    }
   
    read(id: number): Promise<AppUser>;
    read(all: boolean): Promise<AppUser[]>;
    read(id?: number | undefined, all?: boolean | undefined): Promise<AppUser | AppUser[]>;
    public read(id?: any, all?: any): Promise<AppUser | AppUser[]> {
        if (typeof id ==='number') {
            return Promise.resolve(mockUser);
        }
        return Promise.resolve(mockUser);
    }

    public update(target: AppUser, modifications: AppUser): Promise<AppUser> {
        return Promise.resolve(mockUser);
    }

    public destroy(target: AppUser): Promise<AppUser> {
        return Promise.resolve(mockUser);
    }

    public login(user: Partial<AppUser>): Promise<AppUser> {
        return Promise.resolve(mockUser);
    }
    
    public logout(user: AppUser) {}
}

export default new UserManager();
