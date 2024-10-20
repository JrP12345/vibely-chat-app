// import axios from "axios";
// import React from "react";

// import { useAuth } from "../context/AuthContext";
// const Home = () => {
//   const { setIsAuthenticate } = useAuth();

//   const handleLogout = async () => {
//     try {
//       const response = await axios.post(
//         "https://vibely-chat-app-ytuu.onrender.com/api/user/logout",
//         {},
//         { withCredentials: true }
//       );
//       console.log(response.data.message);

//       setIsAuthenticate(false);
//     } catch (error) {
//       console.error("Logout error:", error);
//     }
//   };
//   return (
//     <div>
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// };

// export default Home;
import React from "react";
import ChatApp from "../components/ChatApp";

const Home = () => {
  return (
    <div>
      <ChatApp />
    </div>
  );
};

export default Home;
