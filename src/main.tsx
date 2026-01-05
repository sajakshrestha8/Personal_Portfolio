import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./Router.tsx";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation.tsx";
import AboutSection from "./components/AboutSection.tsx";
import SkillsSection from "./components/SkillsSection.tsx";
import ProjectsSection from "./components/ProjectSection.tsx";
import ContactSection from "./components/ContactSection.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Navigation />
      <AppRoutes />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </BrowserRouter>
  </StrictMode>
);
