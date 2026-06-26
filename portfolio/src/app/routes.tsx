import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/app/layout/MainLayout";
import HomePage from "@/pages/home/HomePage";
import AboutPage from "@/pages/about/AboutPage";
import ProjectsPage from "@/pages/projects/Project";
import ContactPage from "@/pages/contacts/ContactsPage";

// import ServicesPage from "@/pages/services/ServicesPage";

export const router = createBrowserRouter(
  [
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
          path: "projects",
          element: <ProjectsPage />,
        },
        // {
        //   path: "services",
        //   element: <ServicesPage />,
        // },
        {
          path: "contacts",
          element: <ContactPage />,
        },
        {
          path: "*",
          element: <div>404 - Page Not Found</div>,
        },
      ],
    },
  ],
  {
    basename: "/mellivora24/",
  }
);
