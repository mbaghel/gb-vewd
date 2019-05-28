import React from "react";
import { Route, Switch } from "react-router-dom";
import PageWithNav from "./PageWithNav";
import Video from "./Video";

const VideoSwitch = () => {
  return (
    <Switch>
      <Route path="/video/:id" component={Video} />
      <Route component={PageWithNav} />
    </Switch>
  );
};

export default VideoSwitch;
