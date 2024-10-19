import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { ScaleLoader } from "react-spinners"; // Ensure to install react-spinners
import axios from "axios";
import { FaUserEdit, FaUsers } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import ChatBox from "./ChatBox";
const ChatComponent = () => {
  const [currentChat, setCurrentChat] = useState(null);
  const [showChat, setShowChat] = useState(false);
  const { userData, users, loading } = useAuth(); // Destructure loading

  const handleUserClick = (user) => {
    setCurrentChat(user);
    setShowChat(true);
  };

  const handleBack = () => {
    setShowChat(false);
    setCurrentChat(null);
  };
  const { setIsAuthenticate } = useAuth();

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/user/logout",
        {},
        { withCredentials: true }
      );
      console.log(response.data.message);
      setIsAuthenticate(false);
    } catch (error) {
      console.error("Logout error:", error);
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
  const handleGroup = () => {};
  const handleEditProfile = () => {};
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left User Profile Section */}
      <div
        className={`bg-zinc-900 text-white h-screen w-full md:w-1/4 p-2 transition-all duration-300 ${
          showChat ? "hidden md:block" : "block"
        }`}
      >
        <div className="flex items-center justify-center mb-2">
          <h1 className="text-4xl text-green-400 mr-2">Vibely</h1>
          <img src="/msg-gif-3-logo.gif" alt="Logo" className="w-12 h-12 " />
        </div>
        <div className="flex flex-col mb-5  ">
          <h2 className="text-4xl font-bold text-center">
            {userData ? userData.username : "Loading..."}
          </h2>
          <div className="flex justify-center space-x-4 mt-4">
            {" "}
            {/* Flex container for buttons */}
            <button
              onClick={handleGroup}
              className="bg-red-500 p-2 rounded flex items-center"
            >
              <FaUsers className="mr-2" /> {/* Add icon */}
              New Group
            </button>
            <button
              onClick={handleEditProfile}
              className="bg-red-500 p-2 rounded flex items-center"
            >
              <FaUserEdit className="mr-2" /> {/* Add icon */}
              Edit
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-500 p-2 rounded flex items-center"
            >
              <IoLogOutOutline className="mr-2" /> {/* Add icon */}
              Logout
            </button>
          </div>
        </div>

        <div className="flex items-center mb-4 p-2 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-sm shadow-md">
          <h3 className="text-2xl font-semibold text-white flex-grow">
            Contacts
          </h3>
          <span className="text-white text-xl mr-2">
            <i className="fas fa-address-book"></i>
          </span>{" "}
          {/* Add an icon, adjust based on your icon library */}
        </div>

        <ul className="space-y-2">
          {" "}
          {/* Adds vertical spacing between list items */}
          {users && users.length > 0 ? (
            users.map((user) => (
              <li
                key={user._id}
                className="flex items-center p-3 bg-gray-800 rounded-md hover:bg-gray-700 cursor-pointer transition duration-200 ease-in-out"
                onClick={() => handleUserClick(user)}
              >
                <div className="flex-shrink-0 w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center mr-3">
                  {" "}
                  {/* Darker placeholder for user avatar */}
                  <span className="text-white font-bold">
                    {user.username.charAt(0).toUpperCase()}
                  </span>{" "}
                  {/* Display first letter of username */}
                </div>
                <span className="text-white font-semibold">
                  {user.username}
                </span>{" "}
                {/* Change text color to white */}
              </li>
            ))
          ) : (
            <li className="text-gray-400">No users available</li>
          )}
        </ul>
      </div>

      {/* Right Chat Area */}
      <div
        className={`bg-zinc-900 w-full md:w-3/4 h-screen p-4 flex flex-col transition-all duration-300 shadow-lg ${
          showChat ? "block" : "hidden md:block"
        }`}
      >
        {currentChat ? (
          <>
            {/* Header with back arrow and username */}
            <div className="flex items-center mb-2 bg-zinc-700 p-2 rounded-lg">
              <button
                onClick={handleBack}
                className="text-gray-300 hover:text-gray-500 transition duration-200 ease-in-out focus:outline-none"
              >
                {/* Back arrow icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Username beside the back arrow */}
              <h3 className="text-2xl font-bold text-gray-100 ml-4 flex  items-center">
                <div className="flex-shrink-0 w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center mr-3">
                  {" "}
                  {/* Darker placeholder for user avatar */}
                  <span className="text-white font-bold">
                    {currentChat.username.charAt(0).toUpperCase()}
                  </span>{" "}
                  {/* Display first letter of username */}
                </div>
                <span className="text-white font-semibold">
                  {currentChat.username}
                </span>{" "}
              </h3>
            </div>

            {/* ChatBox component with messages */}
            <div className="flex-grow bg-gray-800 rounded-md  overflow-y-auto shadow-inner">
              <ChatBox currentChat={currentChat} />
            </div>
          </>
        ) : (
          <div className="text-center mt-20 text-gray-400">
            Select a user to chat
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatComponent;
