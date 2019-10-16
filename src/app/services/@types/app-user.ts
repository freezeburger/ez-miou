export enum AppUserStatus {
    ONLINE = 'AppUserStatus-ONLINE',
    OFFLINE = 'AppUserStatus-OFFLINE',
    BUSY = 'AppUserStatus-BUSY',
    AWAY = 'AppUserStatus-AWAY'
}

interface AppUser {
    id:number;
    name: string;
    email:string;
    avatarUrl?: string;
    status: AppUserStatus;
}

export default AppUser;