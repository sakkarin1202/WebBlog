import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import React from "react";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-50 via-purple-100 to-pink-100">
      <header className="bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg">
        <NavBar />
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-6 shadow-lg">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
