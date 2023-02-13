import React from 'react'
import { useMutation } from "@apollo/client";
import useAuth from "./useAuth";
import { REFRESH_TOKEN } from "../graphql/users";

const useRefreshToken = () => {

    const { setAuthData } = useAuth();
    const [ refreshToken ] = useMutation(REFRESH_TOKEN)

    const refresh = async () => {
      const response = await refreshToken();
        setAuthData({
          user: response?.data?.handleRefreshToken.user,
          accessToken: response.data.handleRefreshToken.token,
        });
      
      return response?.data?.handleRefreshToken.token;
    }
    return refresh
}

export default useRefreshToken