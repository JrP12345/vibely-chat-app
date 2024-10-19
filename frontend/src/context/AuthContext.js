import { createContext, useContext, useEffect, useState } from "react";
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
  const [users, setUsers] = useState();
  useEffect(() => {
    const checkAuth = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://localhost:4000/api/user/check",
          {
            withCredentials: true,
          }
        );
        if (response.data.isAuthenticated) {
          setIsAuthenticate(true);
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
    const fetchUserDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://localhost:4000/api/user/userProfile",
          {
            withCredentials: true,
          }
        );

        setUserData(response.data);
        console.log(response.data._id);

        setUserId(response.data._id);
      } catch (error) {
        console.error("Error while fetching Username:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserDetails();

    const fetchAllUsers = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://localhost:4000/api/user/users",
          {
            withCredentials: true,
          }
        );

        setUsers(response.data.users);
      } catch (error) {
        console.error("Error while fetching Users:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllUsers();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticate,
        loading,
        setIsAuthenticate,
        userData,
        users,
        userId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
