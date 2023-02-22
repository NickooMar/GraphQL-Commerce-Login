import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import RegisterScreen from "./pages/RegisterScreen";
import LoginScreen from "./pages/LoginScreen";
import HomeScreen from "./pages/Private/HomeScreen";
import RequireAuth from "./components/RequireAuth";
import Missing from "./pages/Missing";
import SpecificProduct from "./pages/SpecificProduct";
import PersistLogin from "./components/PersistLogin";


import useAuth from "./hooks/useAuth";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />

      {/* Authorized Screen */}
      <Route element={<PersistLogin />}>
        {/* <Route element={<RequireAuth />}> */}
          <Route path="/" element={<HomeScreen />} />
          <Route path="/:id" element={<SpecificProduct />} />
        {/* </Route> */}
      </Route>

      <Route path="*" element={<Missing />} />
    </Routes>
  );
};

export default App;
