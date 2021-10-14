import React from "react";
import About from "./About";
import BoxComponent from "./BoxComponent";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="groupButton">
        <BrowserRouter>
          <ul>
            <li>
              <Link to="/">
                <button className="navButton">About</button>
              </Link>
            </li>
            <li>
              <Link to="/box">
                <button className="navButton">Box</button>
              </Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/">
              <About />
            </Route>
            <Route path="/box">
              <BoxComponent colour="red" name="Ameerul" />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Navbar;
