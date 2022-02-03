import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import PageWrapper from "./component/layout/PageWrapper";

document.body.style.margin = "0";
document.body.style.padding = "0";

ReactDOM.render(
  <React.StrictMode>
    <PageWrapper>
      <App />
    </PageWrapper>
  </React.StrictMode>,
  document.getElementById("root"),
);
