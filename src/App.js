import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "./pages";
import Landing from "./pages/landing";
import About from "./pages/about";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/index" element={<Index />}></Route>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App;
