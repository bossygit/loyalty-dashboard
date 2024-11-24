import React, { useState } from "react";
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

  const [activeTab, setActiveTab] = useState("rewards");
  const card = cards[id];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-primary mb-4">{card.name}</h1>
      <p className="text-gray-700 mb-6">{card.description}</p>

      <div className="flex gap-4 border-b-2 border-gray-200 mb-4">
        <button
          className={`px-4 py-2 ${activeTab === "rewards" ? "border-b-2 border-primary text-primary font-semibold" : ""}`}
          onClick={() => setActiveTab("rewards")}
        >
          Récompenses
        </button>
        <button
          className={`px-4 py-2 ${activeTab === "history" ? "border-b-2 border-primary text-primary font-semibold" : ""}`}
          onClick={() => setActiveTab("history")}
        >
          Historique
        </button>
      </div>

      {activeTab === "rewards" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rewards.map((reward, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 text-center border-2 border-gray-200"
            >
              <img src={reward.image} alt={reward.name} className="mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-primary">{reward.name}</h4>
              <p className="text-gray-600">{reward.points} points</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardDetails;
