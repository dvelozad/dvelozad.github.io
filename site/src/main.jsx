import React from "react";
import ReactDOM from "react-dom/client";
import { Profile } from "./profile/Profile.jsx";
import "./styles/styles.css";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Profile />
  </React.StrictMode>
);
