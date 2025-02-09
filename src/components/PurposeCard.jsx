import React from "react";

const Card = ({ icon, title, description }) => {
  return (
    <div className="p-6 rounded-xl shadow-xl bg-gradient-to-r from-black via-gray-900 to-black text-white border border-gray-800 relative overflow-hidden flex flex-col items-center text-center max-w-sm h-full">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-400 mt-2">{description}</p>
    </div>
  );
};

const CardsGrid = () => {
  return (
    <div className="flex justify-center items-center mt-8 bg-black">
      <div className="grid md:grid-cols-2 gap-6 px-6 md:px-12 py-8">
        <Card
          icon={<span className="text-yellow-500 text-4xl">✅</span>}
          title="Prouvé scientifiquement"
          description="Repose sur un Brevet du CNRS, Label DeepTech"
        />
        <Card
          icon={<span className="text-yellow-500 text-4xl">🫀</span>}
          title="Plus sain que jamais"
          description="Aucun effets secondaires contrairement aux traitements conventionnels"
        />
        <Card
          icon={<span className="text-yellow-500 text-4xl">🎧</span>}
          title="Génère la musique qui vous correspond"
          description="Écoutez le son de votre cerveau dans le style que vous voulez"
        />
        <Card
          icon={<span className="text-yellow-500 text-4xl">🧠</span>}
          title="Facilite votre sommeil et vous apaise"
          description="Écouter les sons de votre cerveau agit directement sur vos humeurs et sensations"
        />
      </div>
    </div>
  );
};

export default CardsGrid;
