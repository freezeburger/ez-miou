import React from "react";
import RoomCardProps from "../@prop-types/room-card.props";
import defaultRoomCardProps from "./room-card.default-props";

const RoomCard = (props: RoomCardProps) => {
  let clickable: boolean = !!props.action;
  /**
   * Function will handle click
   */
  const handleClick = () => {
    if (!!props.action) {
      props.action();
    }
  };

  return (
    <div
      className="card"
      onClick={handleClick}
      style={{ cursor: clickable ? "pointer" : "default" }}
    >
      <div className="card-body" style={{ border: "1px solid " + props.color }}>
        <h5 className="card-title">{props.title}</h5>
        <div>
          Users : {props.user.counter}/{props.user.max}
        </div>
      </div>
    </div>
  );
};
RoomCard.defaultProps = defaultRoomCardProps;

export default RoomCard;
