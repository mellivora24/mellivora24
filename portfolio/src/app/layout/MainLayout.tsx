import { Outlet } from "react-router-dom";

import NavBar from "@/widgets/navbar/NavBar";
import StarField from "@/widgets/background/StarField";

import "./MainLayout.css";

export default function MainLayout() {
  return (
    <>
      <StarField />
      <NavBar />
      <main className="main-content">
        <Outlet />
      </main>
    </>
  );
}
