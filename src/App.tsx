import React from "react";
import { Route, Routes } from "react-router-dom";
import Cards from "./pages/Cards";
import Welcome from "./pages/Welcome";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome/>}/>
      <Route path="/Cards" element={<Cards/>}/>
    </Routes>
  );
}

export default App;