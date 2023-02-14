import React, { useState } from 'react'

import useLogout  from "../hooks/useLogout";
import commerceLogo from "../assets/index";
import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import useAuth from "../hooks/useAuth";

const useNavbar = () => {

  const { authData } = useAuth();
const logout = useLogout();
const navigate = useNavigate();
const [collapseToggle, setCollapseToggle] = useState(false)

const NoUserNavbar = () => {
  return (
    <div className="w-full h-[60px] md:h-full bg-slate-900 pt-2.5 sticky pb-2.5">
      <div
        className="flex justify-around text-white"
        style={{ fontFamily: "montserrat" }}
      >
        <div>
          <a href="/" className="flex items-center">
            <img
              src={commerceLogo}
              alt="Logo"
              className="w-16 h-16 rounded-lg hidden lg:flex"
            />
            <h1 className="text-2xl font-mono ml-2.5">Commerce</h1>
          </a>
        </div>
        <div className="hidden lg:flex space-x-8 items-center justify-center">
          <h1>Ingresar</h1>
          <h1>Crear cuenta</h1>
          <h1>Crear cuenta</h1>
          <h1>Crear cuenta</h1>
        </div>
        <div className="items-center space-x-8 mx-2 hidden md:flex">
          <a href="/login" className="text-lg hover:opacity-50">
            Login
          </a>
          <button
            onClick={() => {
              navigate("/register");
            }}
            className="text-lg px-6 py-2 bg-blue-900 bg-opacity-50 rounded-3xl text-blue-500 hover:opacity-80"
          >
            Sign Up
          </button>
        </div>
      </div>
      {collapseToggle ? (
        <>
          <div className="flex md:hidden absolute top-3 ml-2 text-white">
            <button
              className="p-2"
              onClick={() => setCollapseToggle(!collapseToggle)}
            >
              <div className="space-y-2">
                <div className="w-8 h-0.5 bg-gray-600"></div>
                <div className="w-8 h-0.5 bg-gray-600"></div>
                <div className="w-8 h-0.5 bg-gray-600"></div>
              </div>
            </button>
          </div>
          <div
            className="md:hidden flex space-x-10 p-8 items-center justify-center text-white bg-slate-900"
            onClick={() => setCollapseToggle(!collapseToggle)}
          >
            <a href="/login" className="text-lg hover:opacity-50">
              Login
            </a>
            <button
              onClick={() => {
                navigate("/register");
              }}
              className="text-lg px-6 py-2 bg-blue-900 bg-opacity-50 rounded-3xl text-blue-500 hover:opacity-80"
            >
              Sign Up
            </button>
          </div>
        </>
      ) : (
        <div className="flex lg:hidden absolute top-3 ml-2 text-white">
          <button
            className="p-2"
            onClick={() => setCollapseToggle(!collapseToggle)}
          >
            <div className="space-y-2">
              <div className="w-8 h-0.5 bg-gray-600"></div>
              <div className="w-8 h-0.5 bg-gray-600"></div>
              <div className="w-8 h-0.5 bg-gray-600"></div>
            </div>
          </button>
        </div>
      )}
    </div>
  );
};
  const LoggedInNavbar = () => {
    return (
      <div className="w-full h-[60px] md:h-full bg-slate-900 pt-2.5 sticky pb-2.5">
        <div
          className="flex justify-around text-white"
          style={{ fontFamily: "montserrat" }}
        >
          <div>
            <a href="/" className="flex items-center">
              <img
                src={commerceLogo}
                alt="Logo"
                className="w-16 h-16 rounded-lg hidden lg:flex"
              />
              <h1 className="text-2xl font-mono ml-2.5">Commerce</h1>
            </a>
          </div>
          <div className="hidden lg:flex space-x-8 items-center justify-center">
            <a href="">Ingresar</a>
            <a href="">Crear cuenta</a>
            <a href="">Crear cuenta</a>
            <a href="">Crear cuenta</a>
          </div>
          <div className="flex items-center space-x-8 mx-2">
            <h1>{authData?.user?.username}</h1>
            <a href="" className="hidden md:block">
              <AiOutlineShoppingCart size={28} />
            </a>
            <button
              className="text-lg px-6 py-2 bg-violet-900 bg-opacity-50 rounded-3xl text-violet-500 hover:opacity-80"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        </div>
        {collapseToggle ? (
          <>
            <div className="flex md:hidden absolute top-3 ml-2 text-white">
              <button
                className="p-2"
                onClick={() => setCollapseToggle(!collapseToggle)}
              >
                <div className="space-y-2">
                  <div className="w-8 h-0.5 bg-gray-600"></div>
                  <div className="w-8 h-0.5 bg-gray-600"></div>
                  <div className="w-8 h-0.5 bg-gray-600"></div>
                </div>
              </button>
            </div>
            <div
              className="md:hidden flex space-x-10 p-8 items-center justify-center text-white bg-slate-900"
              onClick={() => setCollapseToggle(!collapseToggle)}
            >
              <a href="" className="hover:opacity-50">
                Hola
              </a>
              <a href="" className="hover:opacity-50">
                Hola
              </a>
              <a href="" className="hover:opacity-50">
                Hola
              </a>
              <a href="" className="hover:opacity-50">
                Hola
              </a>
            </div>
          </>
        ) : (
          <div className="flex lg:hidden absolute top-3 ml-2 text-white">
            <button
              className="p-2"
              onClick={() => setCollapseToggle(!collapseToggle)}
            >
              <div className="space-y-2">
                <div className="w-8 h-0.5 bg-gray-600"></div>
                <div className="w-8 h-0.5 bg-gray-600"></div>
                <div className="w-8 h-0.5 bg-gray-600"></div>
              </div>
            </button>
          </div>
        )}
      </div>
    );
  }
  return [LoggedInNavbar, NoUserNavbar];
}

export default useNavbar;