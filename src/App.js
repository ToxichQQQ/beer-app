import React from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { AllBeerPage } from "./pages/AllBeerPage/AllBeerPage";
import { Beer } from "./pages/BeerPage/BeerPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AllBeerPage />} exact />
          <Route path="/beer/:id" element={<Beer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
