import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Add from "components/Add";
import Home from "components/Home";
import Search from "components/Search";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </Router>
  );
};

export default App;
