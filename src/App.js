import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import Games from "./Component/Games";
import StoresGames from "./Component/StoresGames";
import Dashboard from "./Component/Dashboard/Dashboard";
import NavBar from "./Component/NavBar";
import NotFound from "./Component/NotFound";

function App() {
  return (
    <div className="app-shell">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/storesgames" element={<StoresGames />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
