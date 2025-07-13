import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./AppRouter.tsx";
// @ts-expect-error Adds .css to website
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);