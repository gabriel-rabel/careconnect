import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <NavBar />
      <div className="shadow min-h-screen md:max-w-screen-xl m-auto">
        <h1> Bem vindo ao site</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
