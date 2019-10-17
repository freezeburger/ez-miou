import React from "react";
import UserProfile from "../../components/user-profile/userprofile.component";
import UserList from "../../components/user-list/userlist.component";
import { AppUserStatus } from "../../services/@types/app-user";
import MessageList from "../../components/message-list/messagelist.component";
import TalkEditor from "../../components/talk-editor/talk-editor.component";

class Talk extends React.Component {
  constructor(props: any) {
    super(props);
  }

  //LifeCycle
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className="talk-container">
        <div className="row">Header</div>
        <div className="row">
          <div className="col-2">
            <UserProfile></UserProfile>
            <UserList userList={[{id: 123, name: "Zorb", email: "zorb@toto.com", status: AppUserStatus.AWAY}]}></UserList>
          </div>
          <div className="col-10">
            <MessageList></MessageList>
            <TalkEditor></TalkEditor>
          </div>
        </div>
      </div>
    );
  }
}

export default Talk;
