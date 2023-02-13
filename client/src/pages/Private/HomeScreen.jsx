import React, { useContext } from 'react'

import useAuth from "../../hooks/useAuth";
import useLogout  from "../../hooks/useLogout";

const HomeScreen = () => {
  const { authData } = useAuth();
  const logout = useLogout();

  return (
    <div className="h-screen w-screen bg-[#6d2ef1]">
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-4xl text-white">HOMEPAGE</h1>
        <h1>{authData?.user?.username}</h1>
        <button
          className="p-4 bg-white rounded-3xl text-2xl mt-4"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default HomeScreen