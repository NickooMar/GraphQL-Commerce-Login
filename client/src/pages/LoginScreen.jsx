import React, { useState } from 'react'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiFillEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../graphql/users";
import useToggle from "../hooks/useToggle";


const LoginScreen = () => {

  const navigate = useNavigate();

  const [ loginUser ] = useMutation(LOGIN_USER)
  const [check, toggleCheck] = useToggle("persist", false);


  // Context
  const { setAuthData, authData } = useAuth();

  const initialState = {
    email: '',
    password: ''
  }
  const [formFields, setFormFields] = useState(initialState);
  const [hidePass, setHidePass] = useState(true)

  const handleChange = (e) => {
    setFormFields({...formFields, [e.target.name]: e.target.value})
  } 

  const handleSubmit = async(e) => {
    e.preventDefault();
    const { email, password } = formFields;
    if (!email || !password || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast.error("All fields are Required", {
        progressStyle: { backgroundColor: "#A7A2A9" },
      });
    } else {
      try {
        const loggedUser = await loginUser({
          variables: {
            email,
            password,
          },
        });

        const { accessToken, user, refreshToken } = loggedUser.data.login

        setAuthData({ user, accessToken });
        localStorage.setItem("refreshToken", refreshToken);
        navigate("/home", { replace: true });
        toast.success("Login Succesfully");
      } catch (error) {
        console.log(error)
        setFormFields(initialState);
        toast.error("Incorrect email or password", {
          progressStyle: { backgroundColor: "#A7A2A9" },
        });
      }
    }
  } 

  return (
    <div className="h-screen w-full py-8 bg-[#6d2ef1] flex justify-center items-center">
      <div className="h-[450px] w-full bg-white rounded-2xl lg:w-1/3 lg:h-[450px]">
        <div className="flex flex-col justify-center items-center">
          <h1
            className="text-4xl font-light text-center mt-4"
            style={{ fontFamily: "montserrat" }}
          >
            Login
          </h1>
          <div className="w-1/2 bg-slate-500 h-0.5 mt-4" />
        </div>
        <form onSubmit={handleSubmit}>
          <div
            className="flex flex-col mx-8 relative mt-10"
            style={{ fontFamily: "montserrat" }}
          >
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              className="shadow-[0_4px_8px_-2px] shadow-[#6d2ef1] rounded-3xl  p-1.5 h-10 px-9"
              onChange={handleChange}
              value={formFields.email}
            />
            <MdEmail
              size={28}
              color="#6d2ef1"
              className="left-0 mt-1.5 ml-1.5 absolute"
            />
          </div>
          <div
            className="flex flex-col mx-8 relative mt-10"
            style={{ fontFamily: "montserrat" }}
          >
            <input
              type={hidePass ? "password" : "text"}
              name="password"
              id="password"
              placeholder="Password"
              className="shadow-[0_4px_8px_-2px] shadow-[#6d2ef1] rounded-3xl  p-1.5 h-10 px-9"
              onChange={handleChange}
              value={formFields.password}
            />
            <RiLockPasswordFill
              size={28}
              color="#6d2ef1"
              className="left-0 mt-1.5 ml-1 absolute"
            />
            <AiFillEye
              size={28}
              color="#6d2ef1"
              className="right-0 mt-1.5 mr-1.5 absolute cursor-pointer"
              onClick={() => setHidePass(!hidePass)}
            />
          </div>

          <div
            className="flex flex-col mx-8 mt-8 items-center justify-center"
            style={{ fontFamily: "montserrat" }}
          >
            <h1 className="mb-2 text-[#6d2ef1] font-semibold">
              <a href="">Forgot password?</a>
            </h1>
            <div className="mb-2">
              <input
                type="checkbox"
                onChange={toggleCheck}
                checked={check}
                id="persist"
              />
              <label htmlFor="persist" className='ml-1'>Trust this device</label>
            </div>
            <button
              type="submit"
              className="p-3 bg-[#6d2ef1] rounded-full text-white w-1/2 shadow-md shadow-[#bc8ce4]"
            >
              <h1 className="text-lg">SIGN IN</h1>
            </button>
            <h1 className="mt-3">
              Don't have an account?
              <a
                onClick={() => navigate("/register")}
                className="cursor-pointer text-[#6d2ef1] font-semibold ml-2"
              >
                Sign up
              </a>
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
};


export default LoginScreen