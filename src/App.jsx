import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <div className="shadow min-h-screen md:max-w-screen-xl m-auto">
        <h1> Bem vindo ao site</h1>
      </div>
      <Footer />
    </div>
  );
}

export default App;
