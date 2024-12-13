import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import React from "react";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <NavBar />
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-6 shadow-lg mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
