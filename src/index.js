import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <p>00:30:00</p>
      <div className="Timer-property">
        <h5>Hour</h5>
        <h5>Minute</h5>
        <h5>Second</h5>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
