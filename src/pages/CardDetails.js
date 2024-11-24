import React from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  const { id } = useParams();
  const cards = {
    1: { name: "Carte Mokolo", description: "Niveau de base pour les nouveaux membres" },
    2: { name: "Carte Lusaka", description: "Niveau intermédiaire pour les clients fidèles" },
    3: { name: "Carte Bomoyi", description: "Niveau premium avec avantages exclusifs" },
  };

  const rewards = [
    { image: "https://via.placeholder.com/80", name: "Petit-déjeuner gratuit", points: 2000 },
    { image: "https://via.placeholder.com/80", name: "Accès au spa", points: 5000 },
    { image: "https://via.placeholder.com/80", name: "Surclassement de chambre", points: 10000 },
    { image: "https://via.placeholder.com/80", name: "Dîner pour deux", points: 15000 },
  ];

  const card = cards[id];

  return (
    <div style={{ padding: "20px" }}>
      <h1>{card.name}</h1>
      <p>{card.description}</p>
      <div style={{ marginTop: "20px" }}>
        <div style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "10px" }}>
          <h3>Détails de la Carte</h3>
          <p>{card.description}</p>
        </div>
        <div style={{ marginTop: "20px" }}>
          <h2>Onglets</h2>
          <div>
            <button style={{ padding: "10px", marginRight: "10px", backgroundColor: "#4CAF50", color: "white", border: "none" }}>
              Récompenses
            </button>
            <button style={{ padding: "10px", backgroundColor: "#ccc", color: "black", border: "none" }}>
              Historique
            </button>
          </div>
          <div style={{ marginTop: "10px" }}>
            <h3>Récompenses</h3>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {rewards.map((reward, index) => (
                <div
                  key={index}
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    padding: "10px",
                    textAlign: "center",
                    width: "200px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <img src={reward.image} alt={reward.name} style={{ width: "80px", height: "80px" }} />
                  <h4>{reward.name}</h4>
                  <p>{reward.points} points</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
