import React from "react";
import UserProfile from "../../components/user-profile/userprofile.component";

class Home extends React.Component {
  constructor(props: any) {
    super(props);
  }

  //LifeCycle
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <React.Fragment>
        <UserProfile></UserProfile>
      </React.Fragment>
    );
  }
}

export default Home;
