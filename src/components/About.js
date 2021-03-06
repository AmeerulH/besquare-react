import React from "react";
import logo from "../logo.svg";
import { useEffect, useState } from "react";

const About = () => {
  const [price, setPrice] = useState("0");
  const [refresh, setRefresh] = useState(true);

  function Refresh() {
    setRefresh(true);
  }

  useEffect(() => {
    if (refresh) {
      fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then((res) => {
          return res.json();
        })
        .then((resJson) => {
          setPrice(resJson.bpi.USD.rate);
        });
      setRefresh(false);
    }
  }, [refresh]);

  return (
    <div className="App">
      <div className="App-header">
        <h1>BTC Price</h1>
        <p id="data-display">${price}</p>
        <button onClick={Refresh}>Refresh</button>
      </div>
    </div>
  );
};

export default About;
