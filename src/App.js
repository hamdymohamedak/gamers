import React from "react";
import {Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import Games from "./Component/Games";
import StoresGames from "./Component/StoresGames";
import Dashboard from "./Component/Dashboard/Dashboard";
import Android from "./Component/Android";
import Playstation from "./Component/Playstation";
import Xbox from "./Component/Xbox";
import Iphone from "./Component/Iphone";
import NavBar from "./Component/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/storesgames" element={<StoresGames />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/android" element={<Android />} />
        <Route path="/playstation" element={<Playstation />} />
        <Route path="/xbox" element={<Xbox />} />
        <Route path="/iphone" element={<Iphone />} />/>
      </Routes>
    </>
  );
}

export default App;
