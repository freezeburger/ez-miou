import React from 'react';
import UserProfile from '../../components/user-profile/userprofile.component';
import UserList from '../../components/user-list/userlist.component';
import TalkEditor from '../../components/talk-editor/talk-editor.component';
import TalkHeader from '../../components/talk-header/talkheader.component';

 class Talk extends React.Component{
     
    constructor(props:any){
         super(props);
     }

     //LifeCycle
     componentDidMount(){}

     componentWillUnmount(){}

     render(){
         return (
             <React.Fragment>
                <TalkHeader id={1} name="" email="" status=""></TalkHeader>
                <UserProfile></UserProfile>
                <UserList userList={ [] }></UserList>
                <TalkEditor></TalkEditor>
            </React.Fragment> 
         );
     }
 }

export default Talk;