import React, { useState } from "react";
import { ScaleLoader } from "react-spinners";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
const Login = ({ setPageToggle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { setIsAuthenticate, fetchAllUsers, fetchUserGroups } = useAuth();
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error
    setLoading(true); // Set loading state
    try {
      const response = await axios.post(
        "http://localhost:4000/api/user/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      if (response.data.success) {
        setIsAuthenticate(true);
        fetchAllUsers();
        fetchUserGroups();
      } else {
        setError(response.data.message || "Login failed.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div>
        <div className="flex justify-center items-center h-screen">
          <ScaleLoader color="#36D7B7" />
        </div>
      </div>
    );
  }
  return (
    <div className=" p-5 bg-zinc-950">
      <div className="flex items-center justify-center mb-4">
        <h1 className="text-4xl text-green-400 mr-2">VIBELY</h1>
        <img src="/msg-gif-3-logo.gif" alt="Logo" className="w-12 h-12 " />
      </div>
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}

      <h3 className="text-6xl text-center m-4 text-white">Login</h3>
      <form onSubmit={handleLogin} className="flex flex-col ">
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          className="text-white p-3 m-3 bg-zinc-900 w-80 border-none "
        />
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          className="text-white p-3 m-3 bg-zinc-900 w-80 border-none "
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-green-300 to-green-700 p-3 m-3"
        >
          Login
        </button>
      </form>
      <h4 className="p-3 text-white">
        Don't have an Account ?{" "}
        <span
          onClick={() => setPageToggle((prev) => !prev)}
          className="cursor-pointer text-blue-500 underline"
        >
          Register
        </span>
      </h4>
    </div>
  );
};

export default Login;
