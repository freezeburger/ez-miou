import React from 'react';
import UserProfile from '../../components/user-profile/userprofile.component';
import UserList from '../../components/user-list/userlist.component';
import { AppUserStatus } from '../../services/@types/app-user';
import './talk.scss';
import MessageList from '../../components/message-list/messagelist.component';
import TalkEditor from '../../components/talk-editor/talk-editor.component';

 class Talk extends React.Component{
     
    users = [
        {
          id: 1,
          name: 'Marge',
          email: 'marge@blabla.com',
          status: AppUserStatus.ONLINE
        },
        {
          id: 1,
          name: 'Homer',
          email: 'homer@blabla.com',
          status: AppUserStatus.AWAY
        },
        {
          id: 1,
          name: 'Bart',
          email: 'bart@blabla.com',
          status: AppUserStatus.ONLINE
        }
      ];

    constructor(props:any){
         super(props);
     }

     //LifeCycle
     componentDidMount(){}

     componentWillUnmount(){}

     render(){
         return (
         <div className="container-fluid">
            <div className="row">
                <div className="col-3 left-bar">
                    <div className="row">
                        <div className="col">
                            <UserProfile></UserProfile>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <UserList userList={this.users}></UserList>
                        </div>
                    </div>
                </div>
                <div className="col-9">
                    <div className="row">
                        <div className="col message-list-container">
                            <MessageList/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col talk-editor">
                            <TalkEditor/>
                        </div>
                    </div>
                </div>
            </div>
         </div>)
     }
 }

 export default Talk;


