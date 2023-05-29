import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./Pages/HomePage";

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <HomePage />
      <Footer />
    </React.Fragment>
  );
}
