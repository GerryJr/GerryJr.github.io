import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header.tsx"
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

export default function Layout() {
  return (
    <>
      <Header/>
      <Navbar/>
      <main className="container">{/* tailwind or plain CSS */}
        <Outlet/>
      </main>
      <Footer/>
    </>
  );
}