import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import RootApp from "./pages/RootApp";

import "./index.css";

import appStore from "./store/appStore";

const root = document.getElementById("root");

createRoot(root).render(
  <StrictMode>
    <Provider store={appStore}>
      <RootApp />
    </Provider>
  </StrictMode>
);
