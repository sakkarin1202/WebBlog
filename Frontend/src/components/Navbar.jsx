import React from "react";

const Navbar = () => {
  const handleHomeClick = () => {
    window.location.href = "/"; // ไปที่หน้า Home
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="/post" className="text-purple-600 hover:text-purple-800">
                New Post
              </a>
            </li>
          </ul>
        </div>

        <a
          href="#"
          onClick={handleHomeClick}
          className="btn btn-ghost text-2xl text-blue-600 hover:text-blue-800 flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 9l9-7 9 7v9a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9z"
            />
          </svg>
          XFake Blog
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/create" className="text-purple-600 hover:text-purple-800">
              Create New Post
            </a>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <a href="/login" className="btn btn-outline btn-primary mr-2">
          Login
        </a>
        <a href="/register" className="btn btn-primary">
          Register
        </a>
      </div>
    </div>
  );
};

export default Navbar;
