import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

document.body.style.margin = "0";
document.body.style.padding = "0";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
