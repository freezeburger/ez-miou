import React from "react";
import RoomCloud from "../../components/room-cloud/room-cloud.component";

class Room extends React.Component {
  constructor(props: any) {
    super(props);
  }

  //LifeCycle
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
        <div className="room-container">
            <RoomCloud></RoomCloud>
        </div>
    );
  }
}

export default Room;
