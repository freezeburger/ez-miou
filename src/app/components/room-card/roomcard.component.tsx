import React from "react";
import RoomCardProps from "../@prop-types/room-card.props";
import defaultRoomCardProps from "./room-card.default-props";

const RoomCard = (props: RoomCardProps) => {
  return (
    <div className="card">
      <div className="card-header">Header</div>
      <div className="card-body" style={{background: props.color}}>
        <h5 className="card-title">{props.title}</h5>
        <div>{props.user.counter}/{props.user.max}</div>
      </div>
    </div>
  );
};
RoomCard.defaultProps = defaultRoomCardProps;

export default RoomCard;
