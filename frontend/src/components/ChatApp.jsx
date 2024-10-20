import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { ScaleLoader } from "react-spinners"; // Ensure to install react-spinners
import Modal from "../components/Modal";
import GroupCreationForm from "../components/GroupCreationForm";
import axios from "axios";
import { FaUserEdit, FaUsers } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import ChatBox from "./ChatBox";
import UserEditForm from "./UserEditForm";

const ChatComponent = () => {
  const [currentChat, setCurrentChat] = useState(null);
  const [showChat, setShowChat] = useState(false);
  const { userData, users, groups, loading, setIsAuthenticate } = useAuth(); // Added groups
  const [isGroupModalOpen, setIsGroupModalOpen] = useState(false);
  const [isUserEditModalOpen, setIsUserEditModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isViewingUsers, setIsViewingUsers] = useState(true); // State to toggle between users and groups

  // Function to handle the user click
  const handleUserClick = (user) => {
    setCurrentChat(user);
    setShowChat(true);
  };

  // Function to handle group click
  const handleGroupClick = (group) => {
    setCurrentChat(group);
    setShowChat(true);
  };

  // Filter users based on search query
  const filteredUsers = users
    ? users.filter((user) =>
        user.username.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  // Filter groups based on search query
  const filteredGroups = groups
    ? groups.filter((group) =>
        group.groupName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  // Function to handle group creation
  const handleCreateGroup = (group) => {
    setIsGroupModalOpen(false);
  };

  // Function to go back to the user list
  const handleBack = () => {
    setShowChat(false);
    setCurrentChat(null);
  };

  // Function to open profile edit modal
  const handleEditProfile = () => {
    setIsUserEditModalOpen(true);
  };

  // Function to handle user logout
  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "https://vibely-chat-app-ytuu.onrender.com/auth/api/user/logout",
        {},
        { withCredentials: true }
      );

      setIsAuthenticate(false);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // If the data is loading or not yet available, display a loader
  if (loading || !userData || (!users && !groups)) {
    return (
      <div className="flex justify-center bg-black items-center h-screen">
        <ScaleLoader color="#36D7B7" />
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left User Profile Section */}
      <div
        className={`bg-zinc-900 text-white h-screen w-full md:w-1/4 p-2 transition-all duration-300 ${
          showChat ? "hidden md:block" : "block"
        }`}
      >
        <div className="flex items-center justify-center mb-2">
          <h1 className="text-4xl text-green-400 mr-2">VIBELY</h1>
          <img src="/msg-gif-3-logo.gif" alt="Logo" className="w-12 h-12 " />
        </div>
        <div className="flex flex-col mb-5">
          <h2 className="text-4xl font-bold text-center">
            {userData ? userData.username : "Loading..."}
          </h2>
          <div className="flex justify-center space-x-4 mt-4">
            <button
              onClick={() => setIsGroupModalOpen(true)}
              className="bg-zinc-700 p-2 rounded flex items-center"
            >
              <FaUsers className="mr-2" />
              New Group
            </button>
            <button
              onClick={handleEditProfile}
              className="bg-zinc-700 p-2 rounded flex items-center"
            >
              <FaUserEdit className="mr-2" />
              Edit
            </button>
            <button
              onClick={handleLogout}
              className="bg-zinc-700 p-2 rounded flex items-center"
            >
              <IoLogOutOutline className="mr-2" />
              Logout
            </button>
          </div>
        </div>

        {/* Toggle Buttons for User / Group View */}
        <div className="flex justify-center mb-4">
          <button
            onClick={() => setIsViewingUsers(true)}
            className={`${
              isViewingUsers
                ? "bg-gradient-to-r from-purple-600 to-indigo-700"
                : "bg-gray-800"
            } p-2 rounded-lg w-1/2 mx-2 text-white shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-600`}
          >
            Users
          </button>
          <button
            onClick={() => setIsViewingUsers(false)}
            className={`${
              !isViewingUsers
                ? "bg-gradient-to-r from-purple-600 to-indigo-700"
                : "bg-gray-800"
            } p-2 rounded-lg w-1/2 mx-2 text-white shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-600`}
          >
            Groups
          </button>
        </div>

        {/* Search Input */}
        <div className="mb-4 px-2">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 bg-gray-800 text-white rounded-md border border-gray-600"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Display Users or Groups List based on toggle */}
        {isViewingUsers ? (
          <ul className="space-y-2">
            {filteredUsers && filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <li
                  key={user._id}
                  className="flex items-center p-3 bg-gray-800 rounded-md hover:bg-gray-700 cursor-pointer transition duration-200 ease-in-out"
                  onClick={() => handleUserClick(user)}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">
                      {user.username.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-white font-semibold">
                    {user.username}
                  </span>
                </li>
              ))
            ) : (
              <li className="text-gray-400">No users available</li>
            )}
          </ul>
        ) : (
          <ul className="space-y-2">
            {filteredGroups && filteredGroups.length > 0 ? (
              filteredGroups.map((group) => (
                <li
                  key={group._id}
                  className="flex items-center p-3 bg-gray-800 rounded-md hover:bg-gray-700 cursor-pointer transition duration-200 ease-in-out"
                  onClick={() => handleGroupClick(group)}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">G</span>
                  </div>
                  <span className="text-white font-semibold">
                    {group.groupName}
                  </span>
                </li>
              ))
            ) : (
              <li className="text-gray-400">No groups available</li>
            )}
          </ul>
        )}
      </div>

      {/* Right Chat Area */}
      <div
        className={`bg-zinc-900 w-full md:w-3/4 h-screen p-4 flex flex-col transition-all duration-300 shadow-lg ${
          showChat ? "block" : "hidden md:block"
        }`}
      >
        {/* Chat View */}
        {currentChat ? (
          <>
            <div className="flex items-center mb-2 bg-zinc-700 p-2 rounded-lg">
              <button
                onClick={handleBack}
                className="text-gray-300 hover:text-gray-500 transition duration-200 ease-in-out focus:outline-none"
              >
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
              <h3 className="text-2xl font-bold text-gray-100 ml-4 flex items-center">
                <div className="flex-shrink-0 w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">
                    {currentChat.username
                      ? currentChat.username.charAt(0)
                      : "G"}
                  </span>
                </div>
                {currentChat.username || currentChat.groupName}
              </h3>
            </div>

            {/* Render the chat component */}
            <ChatBox currentChat={currentChat} />
          </>
        ) : (
          <div className="flex items-center justify-center text-gray-400 h-full">
            Select a user or group to start chatting.
          </div>
        )}
      </div>
      <Modal
        isOpen={isGroupModalOpen}
        onClose={() => setIsGroupModalOpen(false)}
        title="Create New Group"
      >
        <GroupCreationForm
          users={users}
          onSubmit={handleCreateGroup}
          onClose={() => setIsGroupModalOpen(false)}
        />
      </Modal>

      <Modal
        isOpen={isUserEditModalOpen}
        onClose={() => setIsUserEditModalOpen(false)}
        title="Edit Profile"
      >
        <UserEditForm
          user={userData}
          onSubmit={(updatedUser) => {
            setIsUserEditModalOpen(false);
          }}
          onClose={() => setIsUserEditModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default ChatComponent;
