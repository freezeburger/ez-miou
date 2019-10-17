import React from 'react';
import RoomCloud from '../../components/room-cloud/room-cloud.component';
import ImageSlider from '../../components/image-slider/image-slider.component';
import RoomCreator from '../../components/room-creator/room-creator.component';
import RoomSearch from '../../components/room-search/room-search.component';

class Room extends React.Component{
    
constructor(props:any){
        super(props);
    }

    //LifeCycle
    componentDidMount(){}

    componentWillUnmount(){}

    render(){
        return (
        <React.Fragment>
            <RoomCloud/>
            <RoomSearch rooms={[]} onSearchCompleted={() => true}/>
            <ImageSlider/>
            <RoomCreator onCreationRequested={() => true }/>
        </React.Fragment>);
    }
}

export default Room;
