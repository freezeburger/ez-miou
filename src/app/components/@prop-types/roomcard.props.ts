interface RoomCardProps {
    // room card title
    title: string;
    user: {
        counter: number, // number of user in room
        max?: number // maximum user in room
    };
    // room color
    color?: string;
}

export default RoomCardProps;