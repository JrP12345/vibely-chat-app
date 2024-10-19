import React, { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
const Auth = () => {
  const [pageToggle, setPageToggle] = useState(true);

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="relative z-10">
        {pageToggle ? (
          <Login setPageToggle={setPageToggle} />
        ) : (
          <Register setPageToggle={setPageToggle} />
        )}
      </div>
    </div>
  );
};

export default Auth;
