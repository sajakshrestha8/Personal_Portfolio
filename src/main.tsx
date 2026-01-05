import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./Router.tsx";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Navigation />
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
);
