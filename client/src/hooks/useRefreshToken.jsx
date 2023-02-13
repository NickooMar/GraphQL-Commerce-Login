import React from 'react'
import { useMutation } from "@apollo/client";
import useAuth from "./useAuth";
import { REFRESH_TOKEN } from "../graphql/users";

const useRefreshToken = () => {

    const { setAuthData } = useAuth();
    const [ refreshToken, { loading, data } ] = useMutation(REFRESH_TOKEN)

    const refresh = async () => {
      const response = await refreshToken();
      setAuthData((prev) => {
        return {
          ...prev,
          accessToken: response?.data?.handleRefreshToken.token,
        };
      });
      return response?.data?.handleRefreshToken.token;
    }
    return refresh
}

export default useRefreshToken