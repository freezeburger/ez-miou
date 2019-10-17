import AppTalk from "./app-talk";
import AppUser from "./app-user";

/**
 * A room is the place where a talk happens. 
 */
interface AppRoom {
    // Identifier of the room
    id: number;

    // Name of the room
    name: string;

    // Subject that this room is discussing
    subject: string;

    // The talk happening in this room
    talk?: AppTalk;

    // Contains the users that are currently in this room
    users: Array<AppUser>;
}

export default AppRoom;