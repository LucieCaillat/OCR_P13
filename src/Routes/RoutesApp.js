import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomePage from "../features/homePage/HomePage";
import SignIn from "../features/login/LoginPage";
import UserPage from "../features/user/UserPage";
import UpdatePage from "../features/update/UpdatePage";
import { useSelector } from "react-redux";

export default function RoutesApp() {
  const isLogin = useSelector((state) => state.login.status) === "connected";

  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route
          exact
          path="sign-in"
          element={isLogin ? <UserPage /> : <SignIn />}
        />
        <Route path="user" element={isLogin ? <UserPage /> : <SignIn />} />
        <Route path="update" element={<UpdatePage />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}
