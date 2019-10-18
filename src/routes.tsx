import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './app/containers/home/home.container';
import Room from "./app/containers/room/room.container";
import globalEmitter from './app/services/event-emitter/global-emitter.service';
import AppEvents from "./app/services/event-emitter/app-events.service";
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

class NoRoutes extends React.Component {

    state = {
        ScreenComponent: Home
    }

    private globalEmitter = globalEmitter;
    //private eventSubscribed;

    componentDidMount() {
        // this.eventSubscribed = 
        this.globalEmitter.subscribe(AppEvents.EVT_USER_CONNECTED, this.enterApplication)
    }

    componentWillUnmount() {
        // this.globalEmitter.unsubscribe(eventSubscribed);
    }

    enterApplication = (data: AppUser) => {
        console.warn(data);
        this.setState( {
            ScreenComponent: Room
        })
    }

    render() {
        return (
            <React.Fragment>
                <this.state.ScreenComponent />
            </React.Fragment>
        );
    }
}

export default NoRoutes;