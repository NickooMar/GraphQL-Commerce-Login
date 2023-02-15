import React, { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiFillEye } from "react-icons/ai";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/users";

const RegisterScreen = () => {

  const navigate = useNavigate();

  const [createUser] = useMutation(CREATE_USER);

  //Inputs useStates

  const initialState = {
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  };

  const [formFields, setFormFields] = useState(initialState);
  const [hidePass, setHidePass] = useState(true)
  const [agreement, setAgreement] = useState(false)

  const handleChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  }


  const handleSubmit = async(e) => {
    e.preventDefault()

  // Validations
  const { email, username, password, confirmPassword } = formFields
  if (
    !email ||
    !username ||
    !password ||
    !confirmPassword ||
    password != confirmPassword ||
    !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) ||
    !agreement /*|| email.length < 6 || username.length < 4 || password.length < 8 */
  ) {
    return toast.error("Please! Check if all fields are correct", {
      progressStyle: { backgroundColor: "#A7A2A9" },
    });
  } else {
    try {
      await createUser({
        variables: {
          email,
          username,
          password,
          confirmPassword,
        },
      });
      setFormFields(initialState);
      navigate("/");
      toast.success("Register Succesfully");
    } catch (error) {
      console.log(error.message);

      if(error?.message === 'Failed to fetch') {
              toast.error("Server Error", {
                progressStyle: { backgroundColor: "#A7A2A9" },
              });
      } else if(error?.message.includes('MongoServerError')) {
        setFormFields(initialState);
        toast.error("Username already exists", {
          progressStyle: { backgroundColor: "#A7A2A9" },
        });
      } else {
        setFormFields(initialState);
        toast.error("Email already exists", {
          progressStyle: { backgroundColor: "#A7A2A9" },
        });

      }
    }
  }
  }


  return (
    <div className="h-screen w-full py-8 bg-[#6d2ef1] flex justify-center items-center">
      <div className="h-[500px] w-full bg-white rounded-2xl lg:w-1/3 lg:h-[500px]">
        <div className="flex flex-col justify-center items-center">
          <h1
            className="text-4xl font-light text-center mt-4"
            style={{ fontFamily: "montserrat" }}
          >
            Register
          </h1>
          <div className="w-1/2 bg-slate-500 h-0.5 mt-4" />
        </div>
        <form onSubmit={handleSubmit}>
          <div
            className="flex flex-col mx-8 relative mt-6"
            style={{ fontFamily: "montserrat" }}
          >
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="shadow-[0_4px_8px_-2px] shadow-[#6d2ef1] rounded-3xl  p-1.5 h-10 px-9"
              onChange={handleChange}
              value={formFields.email}
              autoComplete="off"
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
              onChange={handleChange}
              value={formFields.username}
              autoComplete="off"
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
            className="flex flex-col mx-8 relative mt-6"
            style={{ fontFamily: "montserrat" }}
          >
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm password"
              className="shadow-[0_4px_8px_-2px] shadow-[#6d2ef1] rounded-3xl  p-1.5 h-10 px-9"
              onChange={handleChange}
              value={formFields.confirmPassword}
            />
            <RiLockPasswordFill
              size={28}
              color="#6d2ef1"
              className="left-0 mt-1.5 ml-1 absolute"
            />
          </div>

          <div
            className="flex flex-col mx-8 mt-6 items-center justify-center"
            style={{ fontFamily: "montserrat" }}
          >
            <label htmlFor="conditions">
              <input
                type="checkbox"
                name="agreement"
                id="agreement"
                className="mb-4 mx-2"
                onChange={() => setAgreement(!agreement)}
              />
              I understand the
              <a
                href="https://www.tiendanube.com/herramientas/generador-terminos-condiciones"
                target="_blank"
                className="text-[#6d2ef1] font-semibold ml-1"
              >
                Terms & Conditions
              </a>
            </label>
            <button
              type="submit"
              className="p-3 bg-[#6d2ef1] rounded-full text-white w-1/2 shadow-md shadow-[#bc8ce4]"
            >
              <h1 className="text-lg">SIGNUP</h1>
            </button>
            <h1 className="mt-4">
              Already have an account?
              <a
                onClick={() => navigate("/login")}
                className="cursor-pointer text-[#6d2ef1] font-semibold ml-2"
              >
                Sign In
              </a>
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;
