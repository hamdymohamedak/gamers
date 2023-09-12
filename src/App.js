import React from "react";
import Games from "./Component/Games";
import NavBar from "./Component/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Contact from "./Component/Contact";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
