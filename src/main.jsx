import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./Theme/ThemeContext";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Wrap the app in ThemeProvider for global theme */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
