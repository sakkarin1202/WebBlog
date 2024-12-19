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

      <main className="flex-grow flex item-center justify-center container h-screen mx-auto p-4 sm:p-6 lg:p-8">
        <Outlet />
      </main>

      <footer className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-6 shadow-lg mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
