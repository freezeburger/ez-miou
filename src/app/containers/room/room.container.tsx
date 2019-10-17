import React from 'react';
import RoomCloud from '../../components/room-cloud/room-cloud.component';
import RoomSearch from '../../components/room-search/room-search.component';
import ImageSlider from '../../components/image-slider/image-slider.component';
import RoomCreator from '../../components/room-creator/room-creator.component';

class Room extends React.Component{
    
constructor(props:any){
        super(props);
    }

    render(){
        return (
            <React.Fragment>
                <RoomCloud />
                <RoomSearch rooms={[]} onSearchCompleted={(roomName) => console.log(`Searching room ${roomName}`)}/>
                <ImageSlider />
                <RoomCreator onCreationRequested={(roomName) => console.log(`Creating room ${roomName}`)}/>
            </React.Fragment>
        );
    }
}

export default Room;
