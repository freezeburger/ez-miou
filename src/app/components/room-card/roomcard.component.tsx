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

  const styles: any = {
    cursor: clickable ? "pointer" : "default",
    width: props.size && props.size.width, 
    height: props.size && props.size.height,
    margin:'5px'
  };

  const boundaries = {
    width: '150px',
    height: '150px',
    transform:`scale(${ 1 + ( (props.user.counter/props.user.max))}, ${ 1 + ( (props.user.counter/props.user.max))})`
  };


  return (
    <div
      className="card d-inline-block"
      onClick={handleClick}
      style={styles}
    >
      <div className="card-body" style={{color:'white', background: props.color , border: "1px solid black", ...boundaries }}>
        <h5 className="card-title">{props.title.toUpperCase()}</h5>
        <div>
          Users : {props.user.counter} {/* props.user.max */}
        </div>
      </div>
    </div>
  );
};
RoomCard.defaultProps = defaultRoomCardProps;

export default RoomCard;
