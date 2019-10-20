import React from 'react';
import RoomCloud from '../../components/room-cloud/room-cloud.component';
import RoomCreator from '../../components/room-creator/room-creator.component';
import ImageSlider from '../../components/image-slider/image-slider.component';
import RoomSearch from '../../components/room-search/room-search.component';
import ResizablePanels from '../../components/resizable-panels/resizablepanels.component';

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
                <RoomSearch  onSearchCompleted={ ()=> true} rooms={[]}/>
                <ResizablePanels>
                    <RoomCloud />
                    <RoomCreator onCreationRequested={ ()=> true } />
                    <ImageSlider/>
                </ResizablePanels>
            </React.Fragment>
        )
    }
}

export default Room;
