// src/components/servicesInfo/electricGates/MotorCard.tsx

import React from "react";

interface MotorCardProps {
  title: string;
  description: string;
  icon: React.ReactElement;
}

const MotorCard: React.FC<MotorCardProps> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default MotorCard;
