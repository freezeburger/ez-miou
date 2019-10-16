export enum AppUserStatus {
    ONLINE,
    OFFLINE,
    BUSY,
    AWAY
}

interface AppUser {
    id:number;
    name: string;
    avatarUrl: string;
    status: AppUserStatus;
}

export default AppUser;