import React from "react";
import logo from "../logo.svg";

const About = () => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Know all about React!!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          targer="_blank"
          rel="noopener noreferrer"
        ></a>
      </div>
    </div>
  );
};

export default About;
