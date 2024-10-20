import React, { useState } from "react";
import { useAuth } from "../context/AuthContext"; // Import useAuth

const UserEditForm = ({ user, onClose }) => {
  const [username, setUsername] = useState(user.username);
  const { updateUser } = useAuth(); // Use the updateUser function from context

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username) {
      alert("Username cannot be empty");
      return;
    }

    try {
      // Trigger updateUser from context instead of making a direct API request
      await updateUser(username);
      onClose(); // Close the form after update
    } catch (error) {
      // Handle error
      console.error("Error updating user:", error);
      alert("Error while updating user details");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-zinc-900 p-4 rounded-lg shadow-lg"
    >
      <div className="mb-4">
        <label className="block text-white text-lg font-semibold mb-2">
          Username:
        </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border border-gray-600 bg-zinc-800 text-white rounded-md"
          placeholder="Enter new username"
          required
        />
      </div>

      <div className="flex justify-between items-center">
        <button
          type="submit"
          className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onClose}
          className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default UserEditForm;
