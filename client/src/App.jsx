import React from "react";
import { Routes, Route } from "react-router-dom";
import RegisterScreen from "./pages/RegisterScreen";
import LoginScreen from "./pages/LoginScreen";
import HomeScreen from "./pages/Private/HomeScreen";
import RequireAuth from "./components/RequireAuth";
import Missing from "./pages/Missing";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RegisterScreen />} />
      <Route path="/login" element={<LoginScreen />} />

      {/* Authorized Screen */}
      <Route element={<RequireAuth />}>
        <Route path="/home" element={<HomeScreen />} />
      </Route>

      <Route path="*" element={<Missing />} />
    </Routes>
  );
};

export default App;
