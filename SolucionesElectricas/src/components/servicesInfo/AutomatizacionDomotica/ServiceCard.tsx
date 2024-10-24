// src/components/servicesInfo/AutomatizacionDomotica/ServiceCard.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' }}
      className="bg-white rounded-lg shadow-md p-6 transition-transform hover:shadow-lg"
    >
      <div className="flex items-center mb-4">
        <div className="p-3 bg-blue-500 text-white rounded-full">
          {icon}
        </div>
        <h2 className="ml-4 text-xl font-semibold text-gray-800">{title}</h2>
      </div>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
