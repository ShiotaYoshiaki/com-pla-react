import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import { MaterialUIControllerProvider } from "context";
import { InitialProvider } from "context/Initial";
import { SelfProfileProvider } from "context/selfProfile";
import { TaskProvider } from "context/Task";
import { ProfileOverviewProvider } from "context/limitedEdition/ProfileOverview";

ReactDOM.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <InitialProvider>
        <SelfProfileProvider>
          <TaskProvider>
            <ProfileOverviewProvider>
              <App />
            </ProfileOverviewProvider>
          </TaskProvider>
        </SelfProfileProvider>
      </InitialProvider>
    </MaterialUIControllerProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
