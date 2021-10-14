import React from "react";
import About from "./About";
import BoxComponent from "./BoxComponent";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const SwitchPage = () => {
  return (
    <BrowserRouter>
      <Switch>
        <ul>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/box">Box</Link>
          </li>
        </ul>
        <Route exact path="/">
          <About />
        </Route>
        <Route path="/box">
          <BoxComponent colour="red" name="Ameerul" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default SwitchPage;
