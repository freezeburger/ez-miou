import React from 'react';
import RoomCloud from '../../components/room-cloud/room-cloud.component';
import RoomSearch from '../../components/room-search/room-search.component';
import RoomCreator from '../../components/room-creator/room-creator.component';
import ImageSlider from '../../components/image-slider/image-slider.component';

class RoomContainer extends React.Component{
    
constructor(props:any){
        super(props);
    }

    //LifeCycle
    componentDidMount(){}

    componentWillUnmount(){}

    render(){
        return (
            <div className="container-fluid">
                <RoomCloud/>
                <RoomSearch />
                <RoomCreator />
                <ImageSlider />
            </div>
        )
    }
}

export default RoomContainer;
