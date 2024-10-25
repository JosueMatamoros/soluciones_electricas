// src/components/servicesInfo/electricGates/AdditionalBenefitCard.tsx

import React from "react";

interface AdditionalBenefitCardProps {
  title: string;
  description: string;
  icon: React.ReactElement;
}

const AdditionalBenefitCard: React.FC<AdditionalBenefitCardProps> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mt-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default AdditionalBenefitCard;
