import React from "react";
import logo from "../logo.svg";
import { useEffect, useState } from "react";

const Fetch = () => {
  const [price, setPrice] = useState("0");

  useEffect(() => {
    const getData = setInterval(() => {
      fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then((res) => {
          return res.json();
        })
        .then((resJson) => {
          setPrice(resJson.bpi.USD.rate);
        });
    }, 10000);

    return () => clearInterval(getData);
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <h1>Interval BTC Price</h1>
        <p id="data-display">${price}</p>
      </div>
    </div>
  );
};

export default Fetch;
