import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className="w-32 h-12 py-2 my-auto text-center bg-red-600 px-7 hover:bg-red-700 hover:cursor-pointer rounded-2xl">
        <button onClick={() => logout()} className="text-lg font-bold">
          Log Out
        </button>
      </div>
    )
  );
};

export default LogoutButton;
