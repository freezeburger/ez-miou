import React from 'react';
import Avatar from '../../components/avatar/avatar.component';
import TalkEditor from '../../components/talk-editor/talk-editor.component';
import UserList from '../../components/user-list/user-list.component';
import MessageList from '../../components/message-list/messagelist.component';
import TalkHeader from '../../components/talk-header/talkheader.component';

class Talk extends React.Component{
    
constructor(props:any){
        super(props);
    }

    render(){
        return (
            <React.Fragment>
                <Avatar />
                <UserList userList={[]} />
                <MessageList />
                <TalkEditor />
            </React.Fragment>
        );
    }
}

export default Talk;