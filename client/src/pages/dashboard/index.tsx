import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
export type User = {
  success: boolean;
  data: {
    id: string;
    username: string;
    email: string;
    isAdmin: boolean;
    iat: number;
    exp: number;
  };
};

export default function Dashboard() {
  const { user, handleLogout } = useContext(UserContext);

  if (!user) {
    return (
      <div>
        <h1 className="text-3xl font-bold underline">Dashboard</h1>
        <p className="text-xl">Welcome</p>
      </div>
    );
  }

  // Use the user properties here

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Dashboard</h1>
      <p className="text-xl">
        Welcome
        {JSON.stringify(user.data, null, 2)}
      </p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}
