import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./Pages/HomePage";
import SignIn from "./Pages/SignIn";
import UserPage from "./Pages/UserPage";

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <UserPage />
      <Footer />
    </React.Fragment>
  );
}
