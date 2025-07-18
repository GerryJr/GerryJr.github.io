import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./AppRouter.tsx";

import "./styles/Globals.css";
import "./styles/Layout.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);