import React from 'react';
import TalkHeader from '../../components/talk-header/talkheader.component';
import UserProfile from '../../components/user-profile/userprofile.component';
import UserList from '../../components/user-list/userlist.component';
import MessageList from '../../components/message-list/messagelist.component';
import TalkEditor from '../../components/talk-editor/talk-editor.component';

 class Talk extends React.Component{
     
    constructor(props:any){
         super(props);
     }

     render(){
        return (
            <React.Fragment>
                    <TalkHeader/>
                    <UserProfile/>
                    <UserList userList={[]}/>
                    <MessageList />
                    <TalkEditor />
            </React.Fragment>
         )
     }
 }


