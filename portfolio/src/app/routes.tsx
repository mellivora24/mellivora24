import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/app/layout/MainLayout";
import HomePage from "@/pages/home/HomePage";
import AboutPage from "@/pages/about/AboutPage";
import SkillsPage from "@/pages/skills/SkillsPage";
import ContactPage from "@/pages/contacts/ContactsPage";
import ProjectsPage from "@/pages/projects/ProjectsPage";
import ServicesPage from "@/pages/services/ServicesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "skills",
        element: <SkillsPage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "services",
        element: <ServicesPage />,
      },
      {
        path: "contacts",
        element: <ContactPage />,
      },
    ],
  },

  // Not found route
  
]);
