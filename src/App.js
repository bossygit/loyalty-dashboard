import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CardList from "./pages/CardList";
import Register from "./pages/Register";
import CardDetails from "./pages/CardDetails";

function App() {
  return (
    <Router>
      <div>
        <nav style={{ padding: "10px", backgroundColor: "#4CAF50" }}>
          <Link to="/" style={{ margin: "10px", color: "white", textDecoration: "none" }}>Cartes</Link>
          <Link to="/register" style={{ margin: "10px", color: "white", textDecoration: "none" }}>S'inscrire</Link>
          <Link to="/dashboard" style={{ margin: "10px", color: "white", textDecoration: "none" }}>Membres</Link>
        </nav>
        <Routes>
          <Route path="/" element={<CardList />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cards/:id" element={<CardDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
