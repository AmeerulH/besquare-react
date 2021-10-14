import React from "react";
import About from "./About";
import BoxComponent from "./BoxComponent";
import Test from "./Test";
import Third from "./Third";
import Start from "./Start";
import Fetch from "./Fetch";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="groupButton">
        <BrowserRouter>
          <ul>
            <li>
              <Link to="/">
                <button className="navButton">Home</button>
              </Link>
              <Link to="/refresh">
                <button className="navButton">Refresh</button>
              </Link>
              <Link to="/interval">
                <button className="navButton">Interval</button>
              </Link>
              <Link to="/hooks">
                <button className="navButton">Hooks</button>
              </Link>
              <Link to="/box">
                <button className="navButton">Box</button>
              </Link>
              <Link to="/test">
                <button className="navButton">Test</button>
              </Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/">
              <Start />
            </Route>
            <Route path="/refresh">
              <About />
            </Route>
            <Route path="/interval">
              <Fetch />
            </Route>
            <Route path="/hooks">
              <Third />
            </Route>
            <Route path="/box">
              <BoxComponent colour="red" name="Ameerul" />
            </Route>
            <Route path="/test">
              <Test arrayTest={[1, 2, 3]} greetings="Props" />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Navbar;
