import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Geekz } from "../components/Geekz";
import { Monokuro } from "../components/Monokuro";
import PinkRoom from "../components/PinkRoom";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/geekz">
          <Geekz />
        </Route>
        <Route exact path="/monokuro">
          <Monokuro />
        </Route>
        <Route exact path="/pinkroom">
          <PinkRoom />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
