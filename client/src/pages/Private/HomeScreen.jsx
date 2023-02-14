import React, { useState } from 'react'

import useAuth from "../../hooks/useAuth";
import useNavbar from "../../components/useNavbar";

const HomeScreen = () => {
  const { authData } = useAuth();

  const [LoggedInNavbar, NoUserNavbar] = useNavbar();

  return <>{!authData.user ? <NoUserNavbar /> : <LoggedInNavbar />}

    <div className='h-[calc(100%-10rem)] bg-gray-900'>

    </div>

  </>;
}

export default HomeScreen