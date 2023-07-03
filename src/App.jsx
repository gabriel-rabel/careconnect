import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import NeedHelpPage from "./pages/NeedHelpPage";
import WantToHelpPage from "./pages/WantToHelpPage";
import ContactPage from "./pages/ContactPage";
import ItemDetailPage from "./pages/ItemDetailPage";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <NavBar />
      <Toaster />
      <div className="md:max-w-screen-xl m-auto md:min-w-[70vw] min-h-[85vh]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/QueroAjudar" element={<WantToHelpPage/>} />
          <Route path="/PrecisoDeAjuda" element={<NeedHelpPage/>} />
          <Route path="Contato" element={<ContactPage />} />
          <Route path="Detalhes/:id" element={<ItemDetailPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
