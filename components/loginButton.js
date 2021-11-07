import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <div className="flex flex-row justify-center h-screen bg-green-200">
        <button
          onClick={() => loginWithRedirect()}
          className="h-20 px-10 py-3 my-20 text-2xl font-bold bg-green-500"
        >
          Login to admin page of The miracle tutorial
        </button>
      </div>
    )
  );
};

export default LoginButton;
