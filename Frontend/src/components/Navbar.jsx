import React from "react";
import { useAuthContext } from "../context/AuthContext";
import Logo from "../assets/Logo.png";
import Swal from "sweetalert2";
import { FaPen } from "react-icons/fa";

const Navbar = () => {
  const { user, logout } = useAuthContext();

  const handleLogout = () => {
    Swal.fire({
      title: "คุณต้องการออกจากระบบหรือไม่?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "ตกลง",
      cancelButtonText: "ยกเลิก",
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        Swal.fire({
          title: "ออกจากระบบสำเร็จ",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="navbar bg-base-100 shadow-lg">
      <div className="navbar-start">
        <a href="/">
          <img src={Logo} alt="Article Logo" className="h-20 w-20" />
        </a>
      </div>

      <div className="navbar-end space-x-2">
        {user ? (
          <>
            <div className="navbar-center">
              <a
                href="/create"
                className="btn bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md flex items-center space-x-2"
              >
                <FaPen className="text-white h-5 w-5" /> {/* New pen icon */}
                <span>Create New Post</span>
              </a>
            </div>
            <button
              className="btn bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <a
              href="/login"
              className="btn bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md font-poppins"
            >
              Login
            </a>
            <a
              href="/register"
              className="btn bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md font-poppins"
            >
              Register
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
