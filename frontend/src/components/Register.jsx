import axios from "axios";
import React, { useState } from "react";
import { ScaleLoader } from "react-spinners";

const Register = ({ setPageToggle }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState("");
  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setError(""); // Reset error message
    try {
      setLoading(true);
      const response = await axios.post(
        "https://vibely-chat-app-ytuu.onrender.com/api/user/register",
        {
          username,
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      if (response.data.success) {
        setPageToggle((prev) => !prev);
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError(error.response?.data?.message || error.message);
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
    <div className="p-5 bg-zinc-950">
      <div className="flex items-center justify-center mb-4">
        <h1 className="text-4xl text-green-400 mr-2">VIBELY</h1>
        <img src="/msg-gif-3-logo.gif" alt="Logo" className="w-12 h-12 " />
      </div>

      <h3 className="text-6xl text-center m-4 text-white">Register</h3>
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}
      <form onSubmit={handleRegister} className="flex flex-col ">
        <input
          type="text"
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
          className="text-white p-3 m-3 bg-zinc-900 w-80 border-none"
        />
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          className="text-white p-3 m-3 bg-zinc-900 w-80 border-none"
        />
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          className="text-white p-3 m-3 bg-zinc-900 w-80 border-none"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-green-300 to-green-700 p-3 m-2"
        >
          Register
        </button>
      </form>
      <h4 className="p-3  text-white">
        Already have an Account?{" "}
        <span
          onClick={() => setPageToggle((prev) => !prev)}
          className="cursor-pointer text-blue-500 underline"
        >
          Login
        </span>
      </h4>
    </div>
  );
};

export default Register;
