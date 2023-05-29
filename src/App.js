import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./Pages/HomePage";
import SignIn from "./Pages/SignIn";
import UserPage from "./Pages/UserPage";

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="sing-in" element={<SignIn />} />
        <Route path="user" element={<UserPage />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}
