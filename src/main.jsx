import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RouterApp from "./router/RouterApp.jsx";
import "./index.css";
import "flowbite";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterApp />
  </StrictMode>
);
