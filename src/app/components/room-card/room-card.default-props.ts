import RoomCardProps from "../@prop-types/room-card.props";

const defaultRoomCardProps: RoomCardProps = {
  title: "title",
  user: {
    counter: 5,
    max: 10
  },
  color: "red",
  action:() => {alert('waza')}
};

export default defaultRoomCardProps;