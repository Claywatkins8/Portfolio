import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import CloudView from "../pages/projectShow/CloudView";
import Wayfarer from "../pages/projectShow/Wayfarer";
import AppTracker from "../pages/projectShow/AppTracker";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/cloudview" component={CloudView} />
    <Route exact path="/wayfarer" component={Wayfarer} />
    <Route exact path="/apptracker" component={AppTracker} />
  </Switch>
);
