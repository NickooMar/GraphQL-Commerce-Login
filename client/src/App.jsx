import React from "react";
import { Routes, Route } from "react-router-dom";
import RegisterScreen from "./pages/RegisterScreen";
import LoginScreen from "./pages/LoginScreen";
import HomeScreen from "./pages/Private/HomeScreen";
import RequireAuth from "./components/RequireAuth";
import Missing from "./pages/Missing";
import PersistLogin from "./components/PersistLogin";

import { commerce } from "./lib/Commerce";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />

      {/* Authorized Screen */}
      <Route element={<PersistLogin />}>
        {/* <Route element={<RequireAuth />}> */}
          <Route path="/" element={<HomeScreen />} />
        {/* </Route> */}
      </Route>

      <Route path="*" element={<Missing />} />
    </Routes>
  );
};

export default App;
