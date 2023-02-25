import React from "react";
import { Route, Routes } from "react-router-dom";
import Cards from "./pages/Cards";
import Welcome from "./pages/Welcome";
import DetailCard from "./Components/DetailCard";
import Provaider from "./context/provaider";


function App() {
  return (
    <Provaider>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/cards" element={<Cards/>}/>
        <Route path="/card/:id" element={<DetailCard/>}/>
      </Routes>
    </Provaider>
  );
}

export default App;