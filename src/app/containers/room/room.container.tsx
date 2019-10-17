import React from 'react';
import RoomCloud from '../../components/room-cloud/room-cloud.component';
import RoomSearch from '../../components/room-search/room-search.component';
import ImageSlider from '../../components/image-slider/image-slider.component';
import AppRoom from '../../services/@types/app-room';

class Room extends React.Component {

  private roomsList: string[] = [
      'Room 1',
      'Room 2',
      'Room 3',
      'Room 4',
  ];

  private rooms: AppRoom[] = [];

  constructor(props: any) {
    super(props);

    this.roomsList.map((room : string, index: number) => {
        this.rooms.push({
            id: index,
            name: room,
            subject: `Room ${room}`,
            users: []
        })
    })
  }

  private launchSearch = (term: string) => {
      console.log (`Search ${term}`);
  }

  render() {
    return (
      <React.Fragment>
        <h1>Room</h1>
        <RoomCloud roomCards={this.rooms}/>
        <RoomSearch rooms={this.roomsList} onSearchCompleted={this.launchSearch} />
        <ImageSlider />
      </React.Fragment>
    );
  }
}

export default Room;
