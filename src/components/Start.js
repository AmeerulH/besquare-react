import React from "react";
import styled from "styled-components";

const Example = styled.h1`
  color: black;
  font-style: italic;
  background-color: white;
  padding: 10px;
  border-radius: 0.6rem;
`;

const Start = () => {
  const hello = {
    color: "White",
    backgroundColor: "Red",
    padding: "10px",
    fontStyle: "italic",
    borderRadius: "0.6rem",
  };

  return (
    <>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1 className="test">BATMAN!!</h1>
        <Example>Hello World</Example>
        <h1 class="test2" style={hello}>
          Supreme
        </h1>
      </header>
    </>
  );
};

export default Start;
