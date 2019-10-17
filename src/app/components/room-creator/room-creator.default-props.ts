import RoomCreatorProps from "../@prop-types/room-creator.props";

const defaultProps: RoomCreatorProps = {
    onCreationRequested: (roomName) => console.log(`Creating room ${roomName}`)
};

export default defaultProps;
