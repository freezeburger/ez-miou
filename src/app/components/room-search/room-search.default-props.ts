import RoomSearchProps from "../@prop-types/room-search.props";

const defaultProps: RoomSearchProps = {
    rooms: [
        "Room1",
        "Room2",
        "Room3"
    ],
    onSearchCompleted: (roomName) => console.log(`Searching room ${roomName}`)
};

export default defaultProps;
