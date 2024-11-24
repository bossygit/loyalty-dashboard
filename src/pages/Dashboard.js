import React, { useState } from "react";

const Dashboard = () => {
  // Exemple de données statiques
  const [users] = useState([
    { id: 1, name: "Jean", email: "jean@example.com", points: 8000, level: "Mokolo" },
    { id: 2, name: "Marie", email: "marie@example.com", points: 20000, level: "Lusaka" },
    { id: 3, name: "Paul", email: "paul@example.com", points: 55000, level: "Bomoyi" },
  ]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Tableau de Bord - Programme de Fidélité</h1>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ borderBottom: "2px solid #000" }}>
            <th style={{ padding: "10px" }}>Nom</th>
            <th style={{ padding: "10px" }}>Email</th>
            <th style={{ padding: "10px" }}>Points</th>
            <th style={{ padding: "10px" }}>Niveau</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} style={{ textAlign: "center", borderBottom: "1px solid #ccc" }}>
              <td style={{ padding: "10px" }}>{user.name}</td>
              <td style={{ padding: "10px" }}>{user.email}</td>
              <td style={{ padding: "10px" }}>{user.points}</td>
              <td style={{ padding: "10px" }}>{user.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
