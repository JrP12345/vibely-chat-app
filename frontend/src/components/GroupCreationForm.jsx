import React, { useState, useEffect } from "react";
import axios from "axios";
import io from "socket.io-client";
import { useAuth } from "../context/AuthContext";

// Assuming your socket server is running on this address
const socket = io("https://vibely-chat-app-ytuu.onrender.com/auth");

const GroupCreationForm = ({ users, onSubmit, onClose }) => {
  const [groupName, setGroupName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const { fetchUserGroups } = useAuth();
  // Filter users based on search input
  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Toggle user selection
  const handleUserSelect = (user) => {
    if (selectedUsers.includes(user._id)) {
      setSelectedUsers(selectedUsers.filter((id) => id !== user._id));
    } else {
      setSelectedUsers([...selectedUsers, user._id]);
    }
  };

  // API function to create a group chat
  const createGroupChat = async (groupName, members) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://vibely-chat-app-ytuu.onrender.com/auth/api/user/createGroup",
        {
          groupName, // Group name to be sent to the API
          members, // Array of selected members (user IDs)
        },
        {
          headers: {
            "Content-Type": "application/json", // Set content type as JSON
          },
          withCredentials: true, // Send cookies or session data with the request
        }
      );

      if (response.data.success) {
        onSubmit(response.data); // Pass the response to the parent component
        fetchUserGroups();
      } else {
        console.error("Failed to create group:", response.data.message);
      }
    } catch (error) {
      console.error("Error while creating group:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!groupName || selectedUsers.length === 0) {
      alert("Please provide a group name and select users");
      return;
    }
    // Create group chat via API
    createGroupChat(groupName, selectedUsers);
  };

  // UseEffect for handling socket connections
  useEffect(() => {
    // Listen for incoming messages or notifications for this group chat
    socket.on("receiveGroupMessage", (message) => {
      // You can add logic here to display new messages
    });

    return () => {
      // Cleanup when component is unmounted
      socket.off("receiveGroupMessage");
    };
  }, []);

  return (
    <form
      onSubmit={handleSubmit} // Call handleSubmit on form submit
      className="bg-zinc-900 p-4 rounded-lg shadow-lg"
    >
      {/* Group Name Input */}
      <div className="mb-4">
        <label className="block text-white text-lg font-semibold mb-2">
          Group Name:
        </label>
        <input
          type="text"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          className="w-full p-2 border border-gray-600 bg-zinc-800 text-white rounded-md"
          placeholder="Enter group name"
          required
        />
      </div>

      {/* Search Users Input */}
      <div className="mb-4">
        <label className="block text-white text-lg font-semibold mb-2">
          Search Users:
        </label>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-600 bg-zinc-800 text-white rounded-md"
          placeholder="Search by username"
        />
      </div>

      {/* List of filtered users with selection checkbox */}
      <div className="mb-4 h-48 overflow-y-scroll border border-gray-600 bg-zinc-800 rounded-md p-2">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div
              key={user._id}
              className="flex items-center justify-between p-2 hover:bg-zinc-700 cursor-pointer text-white"
              onClick={() => handleUserSelect(user)}
            >
              <span className="text-lg">{user.username}</span>
              <input
                type="checkbox"
                checked={selectedUsers.includes(user._id)} // Check if the user is selected
                onChange={() => handleUserSelect(user)} // Handle selection
                className="form-checkbox h-5 w-5 text-green-500"
              />
            </div>
          ))
        ) : (
          <div className="text-gray-400">No users found</div>
        )}
      </div>

      {/* Action buttons */}
      <div className="flex justify-between">
        <button
          type="button"
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-200"
          onClick={onClose} // Call onClose to close the form
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all duration-200"
        >
          {loading ? "Creating..." : "Create Group"} {/* Loading state */}
        </button>
      </div>
    </form>
  );
};

export default GroupCreationForm;
