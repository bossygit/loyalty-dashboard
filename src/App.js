import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CardList from "./pages/CardList";
import Register from "./pages/Register";
import CardDetails from "./pages/CardDetails";

const App = () => {
  return (
    <Router>
      <div>
        <nav className="bg-primary text-white p-4 fixed w-full z-10">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-lg font-bold">Loyalty App</h1>
            <div className="flex gap-4">
              <NavLink to="/" className={({ isActive }) => isActive ? "font-semibold underline" : ""}>
                Cartes
              </NavLink>
              <NavLink to="/register" className={({ isActive }) => isActive ? "font-semibold underline" : ""}>
                S'inscrire
              </NavLink>
              <NavLink to="/dashboard" className={({ isActive }) => isActive ? "font-semibold underline" : ""}>
                Membres
              </NavLink>
            </div>
          </div>
        </nav>
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<CardList />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/cards/:id" element={<CardDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
