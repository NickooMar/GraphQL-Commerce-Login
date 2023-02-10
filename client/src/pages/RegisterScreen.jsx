import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiFillEye } from "react-icons/ai";

import { useNavigate } from "react-router-dom";

const RegisterScreen = () => {

  const navigate = useNavigate()
  
  return (
    <div className="h-screen w-full py-8 bg-[#6d2ef1] flex justify-center items-center">
      <div className="h-[80%] w-full bg-white rounded-2xl lg:w-1/3 lg:h-[500px]">
        <div>
          <h1
            className="text-4xl font-light text-center mt-4"
            style={{ fontFamily: "montserrat" }}
          >
            Register
          </h1>
        </div>

        <div
          className="flex flex-col mx-8 relative mt-6"
          style={{ fontFamily: "montserrat" }}
        >
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            className="shadow-[0_4px_8px_-2px] shadow-[#6d2ef1] rounded-3xl  p-1.5 h-10 px-9"
          />
          <MdEmail
            size={28}
            color="#6d2ef1"
            className="left-0 mt-1.5 ml-1.5 absolute"
          />
        </div>
        <div
          className="flex flex-col mx-8 relative mt-6"
          style={{ fontFamily: "montserrat" }}
        >
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            className="shadow-[0_4px_8px_-2px] shadow-[#6d2ef1] rounded-3xl  p-1.5 h-10 px-9"
          />
          <BiUserCircle
            size={28}
            color="#6d2ef1"
            className="left-0 mt-1.5 ml-1 absolute"
          />
        </div>
        <div
          className="flex flex-col mx-8 relative mt-6"
          style={{ fontFamily: "montserrat" }}
        >
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="shadow-[0_4px_8px_-2px] shadow-[#6d2ef1] rounded-3xl  p-1.5 h-10 px-9"
          />
          <RiLockPasswordFill
            size={28}
            color="#6d2ef1"
            className="left-0 mt-1.5 ml-1 absolute"
          />
        </div>
        <div
          className="flex flex-col mx-8 relative mt-6"
          style={{ fontFamily: "montserrat" }}
        >
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm password"
            className="shadow-[0_4px_8px_-2px] shadow-[#6d2ef1] rounded-3xl  p-1.5 h-10 px-9"
          />
          <RiLockPasswordFill
            size={28}
            color="#6d2ef1"
            className="left-0 mt-1.5 ml-1 absolute"
          />
          <AiFillEye
            size={28}
            color="#6d2ef1"
            className="right-0 mt-1.5 mr-1.5 absolute"
          />
        </div>

        <div
          className="flex flex-col mx-8 mt-6 items-center justify-center"
          style={{ fontFamily: "montserrat" }}
        >
          <label htmlFor="conditions">
            <input
              type="checkbox"
              name="conditions"
              id="conditions"
              className="mb-4 mx-2"
            />
            I understand the
            <a
              href="https://www.tiendanube.com/herramientas/generador-terminos-condiciones"
              target="_blank"
              className="text-[#6d2ef1] font-semibold"
            >
              Terms & Conditions
            </a>
          </label>
          <button className="p-3 bg-[#6d2ef1] rounded-full text-white w-1/2 shadow-md shadow-[#bc8ce4]">
            <h1 className="text-lg">SIGNUP</h1>
          </button>
          <h1 className="mt-4">
            Already have an account?
            <a onClick={() => navigate("/login")} className='cursor-pointer text-[#6d2ef1] font-semibold'>Sign In</a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
