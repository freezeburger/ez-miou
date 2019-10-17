import RoomCardProps from "../@prop-types/room-card.props";

const defaultRoomCardProps: RoomCardProps = {
  title: "title",
  user: {
    counter: 0,
    max: 10
  },
  color: "red",
  action:() => {alert('waza')},
  size: {
    width: 'auto',
    height: 'auto'
  }
};

export default defaultRoomCardProps;
