import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import { MaterialUIControllerProvider } from "context";
import { InitialProvider } from "context/Initial";

ReactDOM.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <InitialProvider>
        <App />
      </InitialProvider>
    </MaterialUIControllerProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
