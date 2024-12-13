import { useEffect, useState } from "react";
import AuthService from "../services/auth.service";
import { useNavigate } from "react-router";
import swal from "sweetalert2";
import { useAuthContext } from "../context/AuthContext";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const { login, user: loggedUser } = useAuthContext();
  useEffect(() => {
    if (loggedUser) {
      navigate("/");
    }
  }, [loggedUser]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    try {
      const currentUser = await AuthService.login(user.username, user.password);
      if (currentUser.status === 200) {
        login(currentUser.data);
        swal.fire({
          title: "Login Successful",
          text: "Welcome back!",
          icon: "success",
        });
        navigate("/");
      }
    } catch (error) {
      swal.fire({
        title: "Login Failed",
        text: error?.response?.data?.message || error.message,
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {/* Username Input */}
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
            name="username"
            value={user.username}
            onChange={handleChange}
            className="grow p-2 border rounded"
            placeholder="Username"
          />
        </label>

        {/* Password Input */}
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
            name="password"
            value={user.password}
            onChange={handleChange}
            className="grow p-2 border rounded"
            placeholder="Password"
          />
        </label>

        {/* Login Button */}
        <button
          onClick={handleSubmit}
          className="w-full p-2 mb-4 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
