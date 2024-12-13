import { useState, useEffect } from "react";
import AuthService from "../services/auth.service";
import { useNavigate } from "react-router";
import swal from "sweetalert2";
import { useAuthContext } from "../context/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const { user: loggedUser } = useAuthContext();
  useEffect(() => {
    if (loggedUser) {
      navigate("/");
    }
  }, [loggedUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // ป้องกันการรีเฟรชหน้าเมื่อส่งฟอร์ม
    try {
      const currentUser = await AuthService.register(
        user.username,
        user.password
      ); // ใช้ await ในการรอคำตอบจาก API
      console.log(currentUser);
      if (currentUser.status === 200) {
        swal.fire({
          title: "User Registration",
          text: currentUser.data.message,
          icon: "success",
        });

        setUser({
          username: "",
          password: "",
        });
        navigate("/login");
      }
    } catch (error) {
      swal.fire({
        title: "User Registration",
        text: error?.response?.data?.message || error.message,
        icon: "error",
      });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={handleSubmit}>
          {" "}
          <label className="input input-bordered flex items-center gap-2 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-5 w-5 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow p-2 border rounded"
              placeholder="Username"
              value={user.username}
              name="username"
              onChange={handleChange}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-5 w-5 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow p-2 border rounded"
              placeholder="Password"
              value={user.password}
              name="password"
              onChange={handleChange}
            />
          </label>
          <button
            type="submit"
            className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
