import logo from "./logo.svg";
import "./App.css";
import "../src/MyFiles/Mystyiles.css";
import "../src/MyFiles/homeAnimation.js";
import HomePage from "../src/MyFiles/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div id="loading_body" className="loading_body">
        اللهم صلى على سيدنا محمد <br /> ( صلى الله عليه وسلم )
      </div>
      <HomePage />
    </div>
  );
}

export default App;
