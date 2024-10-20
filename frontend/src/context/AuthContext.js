import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const [userId, setUserId] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [groups, setGroups] = useState([]);
  // Function to fetch user profile
  const fetchUserDetails = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        "http://localhost:4000/api/user/userProfile",
        {
          withCredentials: true,
        }
      );
      setUserData(data);
      setUserId(data._id);
    } catch (error) {
      console.error("Error while fetching user details:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Function to check if the user is authenticated
  const checkAuth = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("http://localhost:4000/api/user/check", {
        withCredentials: true,
      });
      if (data.isAuthenticated) {
        setIsAuthenticate(true);
        fetchUserDetails(); // Fetch user details if authenticated
      } else {
        setIsAuthenticate(false);
      }
    } catch (error) {
      console.error("Error checking authentication:", error);
    } finally {
      setLoading(false);
    }
  }, [fetchUserDetails]);

  // Function to fetch all users
  const fetchAllUsers = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("http://localhost:4000/api/user/users", {
        withCredentials: true,
      });
      setUsers(data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Function to update the user information
  const updateUser = async (updatedUsername) => {
    setLoading(true);
    try {
      const { data } = await axios.put(
        "http://localhost:4000/api/user/update",
        { username: updatedUsername },
        { withCredentials: true }
      );
      setUserData(data.updatedUser); // Update context with the updated user
      fetchUserDetails(); // Refetch user details after update
    } catch (error) {
      console.error("Error updating user:", error);
    } finally {
      setLoading(false);
    }
  };
  // Function to fetch all groups of the logged-in user
  const fetchUserGroups = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        "http://localhost:4000/api/user/groups",
        {
          withCredentials: true,
        }
      );
      setGroups(data); // Update state with the fetched groups
    } catch (error) {
      console.error("Error fetching groups:", error);
    } finally {
      setLoading(false);
    }
  };
  // UseEffect to check authentication and fetch user data on mount
  useEffect(() => {
    checkAuth();
  }, [checkAuth, fetchAllUsers]);

  // Re-fetch user data if it's null
  useEffect(() => {
    if (isAuthenticate && userData === null) {
      fetchUserDetails();
      fetchUserGroups();
      fetchAllUsers();
    }
  }, [isAuthenticate, userData, fetchUserDetails, fetchAllUsers]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticate,
        loading,
        setIsAuthenticate,
        userData,
        users,
        userId,
        updateUser,
        groups, // Expose groups data to the rest of the app
        fetchAllUsers,
        fetchUserGroups, // Expose function to manually fetch groups
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
