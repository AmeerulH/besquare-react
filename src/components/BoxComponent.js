import React from "react";
import { useState } from "react";

const BoxComponent = (props) => {
  const [colour, setColour] = useState(props.colour);
  const [name, setName] = useState(props.name);

  // name
  function changeName() {
    setName("Zebo");
  }

  function changeColour() {
    setColour("blue");
  }

  return (
    <div className="hooks" style={{ backgroundColor: colour }}>
      <h1 style={{ color: "white" }}>{colour}</h1>
      <button className="counter" onClick={changeColour}>
        Change Colour: {colour}
      </button>

      <button className="counter" onClick={changeName}>
        Click to change name: {name}
      </button>
    </div>
  );
};

export default BoxComponent;
