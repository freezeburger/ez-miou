import React from "react";
import RoomCardProps from "../@prop-types/room-card.props";
import defaultRoomCardProps from "./room-card.default-props";

const RoomCard = (props: RoomCardProps) => {
  return (
    <div className="card">
      <div className="card-body" style={{border: '1px solid ' + props.color}}>
        <h5 className="card-title">{props.title}</h5>
        <div>Users : {props.user.counter}/{props.user.max}</div>
      </div>
    </div>
  );
};
RoomCard.defaultProps = defaultRoomCardProps;

export default RoomCard;
