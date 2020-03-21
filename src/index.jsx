import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <BrowserRouter basename="/">
    {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
      <App />
    </BrowserRouter>,
  document.getElementById("root")
);

registerServiceWorker();
