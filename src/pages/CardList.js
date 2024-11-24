import React from "react";
import { Link } from "react-router-dom";

const CardList = () => {
  const cards = [
    { id: 1, name: "Carte Mokolo", description: "Niveau de base pour les nouveaux membres" },
    { id: 2, name: "Carte Lusaka", description: "Niveau intermédiaire pour les clients fidèles" },
    { id: 3, name: "Carte Bomoyi", description: "Niveau premium avec avantages exclusifs" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Nos Cartes de Fidélité</h1>
      <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
        {cards.map((card) => (
          <div
            key={card.id}
            style={{
              width: "250px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "10px",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3>{card.name}</h3>
            <p>{card.description}</p>
            <Link to={`/cards/${card.id}`} style={{ textDecoration: "none", color: "white" }}>
              <button style={{ padding: "10px 20px", backgroundColor: "#4CAF50", border: "none", borderRadius: "5px", color: "white" }}>
                Voir les détails
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
