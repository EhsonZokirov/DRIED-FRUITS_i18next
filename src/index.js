import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
// import reportWebVitals from "./reportWebVitals";
import { CircularProgress } from "@mui/material";

import "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div className="flex justify-center">
          <CircularProgress sx={{ alignSelf: "center" }} disableShrink />
          loading...
        </div>
      }
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);
// reportWebVitals();
