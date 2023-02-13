import React, { useContext } from 'react'

import useAuth from "../../hooks/useAuth";
import useRefreshToken from "../../hooks/useRefreshToken";

const HomeScreen = () => {

  const { authData, setAuthData } = useAuth();
  // const refresh = useRefreshToken()

  const logout = () => {
    setAuthData({});
    localStorage.removeItem("refreshToken");
  }

  // const handleRefresh = async() => {
  //   await refresh();
  // }

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