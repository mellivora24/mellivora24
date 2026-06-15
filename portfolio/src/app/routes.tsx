import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/app/layout/MainLayout";
import HomePage from "@/pages/home/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);
