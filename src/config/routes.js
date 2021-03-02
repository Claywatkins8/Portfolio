import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/projects" component={Projects} />
  </Switch>
);
