import AppManager from "../@types/app-manager";
import AppUser, { AppUserStatus } from "../@types/app-user";
import { isEmptyStatement } from "@babel/types";

const MockUSer:AppUser = {
   avatarUrl:'http://robohash.org/bob',
   email:'bob@bob.bob',
   id:1,
   name:'Bob',
   status:AppUserStatus.ONLINE
}

export class UserManager implements AppManager<AppUser>{
    
    
    public create(options: any): Promise<AppUser> {
        return Promise.resolve(MockUSer);
    }    
    
    read(id: number): Promise<AppUser>;
    read(all: boolean): Promise<AppUser[]>;
    read(id?: number , all?: boolean ): Promise<AppUser | AppUser[]>;
    public read(id?: any, all?: any):Promise<AppUser | AppUser[]> {
        
        if(typeof id === 'number'){
            return Promise.resolve(MockUSer);
        }
        return Promise.resolve([MockUSer]);
    }

    public update(target: AppUser, modifications: AppUser): Promise<AppUser> {
        return Promise.resolve(MockUSer);
    }

    public destroy(target: AppUser): Promise<AppUser> {
        return Promise.resolve(MockUSer);
    }

    // Abstraction

    public login(user:Partial<AppUser>){}
    public logout(user:AppUser){}

}

export default UserManager;