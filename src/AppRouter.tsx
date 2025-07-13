import { createHashRouter, RouterProvider } from "react-router-dom";

// Created Assets
import Layout from "./Layout.tsx";
import Home from "./pages/Home/Home.tsx";
import Projects from "./pages/Projects/Projects.tsx";
import Experience from "./pages/Experience/Experience.tsx";
import TechSkills from "./pages/TechSkills/TechSkills.tsx";


const router = createHashRouter([
  {
    element: <Layout />, // Navbar + <Outlet/>
    children: [
      { path: "/", element: <Home /> },
      { path: "/projects", element: <Projects /> },
      { path: "/experience", element: <Experience /> },
      { path: "/tech_skills", element: <TechSkills /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}