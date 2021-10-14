import "./App.css";
import Test from "./components/Test";
import Start from "./components/Start";
import Third from "./components/Third";
import BoxComponent from "./components/BoxComponent";
import Navbar from "./components/Navbar";
import SwitchPage from "./components/SwitchPage";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Start />
      <Test arrayTest={[1, 2, 3]} greetings="Props" />
      <Third />
      {/* <BoxComponent colour="red" name="Ameerul" /> */}
    </div>
  );
}

export default App;
