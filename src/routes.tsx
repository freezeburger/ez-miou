import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './app/containers/home/home.container';
import Room from "./app/containers/room/room.container";
import GlobalEmitter from './app/services/event-emitters/global-emitter.service';
import AppUser from "./app/services/@types/app-user";

const Routes = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/room" exact component={Room} />
        </Switch>
    </BrowserRouter>
  );
};

class NoRouto extends React.Component{

  private globalEmitter = GlobalEmitter;
  private sub:any;

  state = {
    ChuckNorris:Home
  }

  componentDidMount(){
    this.sub = this.globalEmitter.subscribe('EVT_USER_CONNECTED', this.enterApplication);
  }

  componentWillUnmount(){
    // this.globalEmitter.unsubscribe(this.sub)
  }

  enterApplication = (data:AppUser) => {
    console.warn('EVT_USER_CONNECTED',data);
    this.setState({
      ChuckNorris:Room
    })
  }


  render(){
    return (
      <React.Fragment>
          <this.state.ChuckNorris/>
      </React.Fragment>
    );
  }
}

export default NoRouto;