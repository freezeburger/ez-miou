import React from 'react';
import Auth from '../../features/auth/auth.feature';
import GlobalEmitter from '../../services/event-emitters/global-emitter.service';
import AppUser from '../../services/@types/app-user';
import { thisExpression } from '@babel/types';
import Room from '../room/room.container';

class Home extends React.Component<any> {
    private globalEmitter = GlobalEmitter;
  constructor(props: any) {
    super(props);
  }

  state = {
      ScreenComponent:Auth
  }

  //LifeCycle
  componentDidMount() {
      this.globalEmitter.subscribe('EVT_USER_CONNECTED', this.enterApplication);
  }
  enterApplication = (result:AppUser) => {
    console.warn('EVT_USER_CONNECTED',result);
    this.setState({ScreenComponent: Room})
}

  componentWillUnmount() {
      //Unsuscribe event
  }

  render() {
    return (
      <React.Fragment>
        <this.state.ScreenComponent/>
      </React.Fragment>
    );
  }
}

export default Home;
