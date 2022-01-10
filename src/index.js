import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import { MaterialUIControllerProvider } from "context";
import { InitialProvider } from "context/Initial";
import { SelfProfileProvider } from "context/selfProfile";

ReactDOM.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <InitialProvider>
        <SelfProfileProvider>
          <App />
        </SelfProfileProvider>
      </InitialProvider>
    </MaterialUIControllerProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
