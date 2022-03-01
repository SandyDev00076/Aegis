import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Add from "components/Add";
import Home from "components/Home";
import Search from "components/Search";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "components/Login";
import Loading from "components/shared/Loading";

const App = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) return <Loading />;
  if (!isAuthenticated) return <Login />;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:id" element={<Add />} />
      </Routes>
    </Router>
  );
};

export default App;
