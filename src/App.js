import React from "react";
import Games from "./Component/Games";
import NavBar from "./Component/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import StoresGames from "./Component/StoresGames";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/storesgames" element={ <StoresGames/> }/>
      </Routes>
    </>
  );
}

export default App;
