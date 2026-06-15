import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";

import { router } from "@/app/routes";
import { DEFAULT_TITLE, HIDDEN_TITLE } from "@/shared/constants/title";

function App() {
  useEffect(() => {
    document.title = DEFAULT_TITLE;

    const handleVisibilityChange = () => {
      document.title = document.hidden ? HIDDEN_TITLE : DEFAULT_TITLE;
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
