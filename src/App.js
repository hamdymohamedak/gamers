import React from "react";
import Games from "./Component/Games";
import NavBar from "./Component/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </>
  );
}

export default App;
