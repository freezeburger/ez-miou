import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './app/containers/home/home.container';
import Room from "./app/containers/room/room.container";

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

export default Routes;