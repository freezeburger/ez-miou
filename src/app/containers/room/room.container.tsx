import React from 'react';
import UserProfile from '../../components/user-profile/userprofile.component';
import TalkEditor from '../../components/talk-editor/talk-editor.component';
import RoomSearch from '../../components/room-search/room-search.component';
import RoomCreator from '../../components/room-creator/room-creator.component';

class Room extends React.Component{
    
constructor(props:any){
        super(props);
    }

    //LifeCycle
    componentDidMount(){}

    componentWillUnmount(){}

    render(){
        return <div>
            <UserProfile></UserProfile>
            <RoomSearch rooms={[]} onSearchCompleted={() => console.log()}></RoomSearch>
            <RoomCreator onCreationRequested={() => {console.log()}}></RoomCreator>
        </div>
    }
}

export default Room;
