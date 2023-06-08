import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./Pages/HomePage";
import SignIn from "./Pages/SignIn";
import UserPage from "./Pages/UserPage";
import { useSelector } from "react-redux";

export default function App() {
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
        <Route path="user" element={<UserPage />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}
