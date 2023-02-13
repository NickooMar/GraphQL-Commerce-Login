import React from 'react'
import useAuth from './useAuth'
import { useMutation } from "@apollo/client";
import { HANDLE_LOGOUT } from "../graphql/users";
import { toast } from "react-toastify";

const useLogout = () => {
    const { setAuthData } = useAuth()
    const [handleLogout] = useMutation(HANDLE_LOGOUT)

    const logout = async () => {
        try {
          await handleLogout().then(() => {
            setAuthData({}), localStorage.removeItem("refreshToken");
          });
          toast.success('Logged Out successfully')
        } catch (error) {
          console.log(error);
        }
    }

    return logout
}

export default useLogout