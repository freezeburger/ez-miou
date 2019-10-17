import React from "react";
import RoomCloud from "../../components/room-cloud/room-cloud.component";
import RoomSearch from "../../components/room-search/room-search.component";
import RoomCreator from "../../components/room-creator/room-creator.component";

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
            <RoomSearch rooms={['zaza, zorb']} onSearchCompleted={(roomName)=> {alert(roomName + ' found')}}></RoomSearch>
            <RoomCreator onCreationRequested={(roomName)=> {alert(roomName + ' created')}}></RoomCreator>
        </div>
    );
  }
}

export default Room;
