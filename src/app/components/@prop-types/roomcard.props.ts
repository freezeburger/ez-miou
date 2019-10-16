export interface RoomCardProps {
    // room card title
    title: string;
    // number of user in room
    userCounter: number;
    // maximum user in room
    maxUser?: number;
    // room color
    color?: string;
}

export default RoomCardProps;