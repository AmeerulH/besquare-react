import React from "react";

const Test = (props) => {
  return (
    <div class="nice">
      <h1>{props.greetings}</h1>
      {props.arrayTest.map((num, index) => {
        return <p key={index}>{num}</p>;
      })}
    </div>
  );
};

export default Test;
