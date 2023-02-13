import React, { useState, useEffect } from "react";

import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useLocalStorage from "../hooks/useLocalStorage";
import useRefreshToken from "../hooks/useRefreshToken";

const PersistLogin = () => {

const refresh = useRefreshToken();
const [isLoading, setIsLoading] = useState(true)
const authData = useAuth()
const [ persist ] = useLocalStorage('persist', false)


    useEffect(() => {
     const verifyRefreshToken = async () => {
        try {
            await refresh();
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
     }
     !authData?.accessToken && persist
       ? verifyRefreshToken()
       : setIsLoading(false);
    }, [])
    

  return (
    <>{!persist ? <Outlet /> : isLoading ? <p>Loading ...</p> : <Outlet />}</>
  );
};

export default PersistLogin;
