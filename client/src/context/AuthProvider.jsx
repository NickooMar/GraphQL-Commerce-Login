import React, { createContext, useState } from 'react'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {

  const [authData, setAuthData] = useState({});

  return (
    <AuthContext.Provider value={{ setAuthData, authData }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext