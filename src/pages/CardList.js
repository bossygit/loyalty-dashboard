import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CardList = () => {
  const cards = [
    { id: 1, name: "Carte Mokolo", description: "Niveau de base pour les nouveaux membres" },
    { id: 2, name: "Carte Lusaka", description: "Niveau intermédiaire pour les clients fidèles" },
    { id: 3, name: "Carte Bomoyi", description: "Niveau premium avec avantages exclusifs" },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-primary">Nos Cartes de Fidélité</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-lg p-6 text-center border-2 border-primary"
          >
            <h3 className="text-xl font-semibold text-primary">{card.name}</h3>
            <p className="text-gray-600 mt-2">{card.description}</p>
            <Link to={`/cards/${card.id}`} className="inline-block mt-4 bg-primary text-white px-4 py-2 rounded-md">
              Voir les détails
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
