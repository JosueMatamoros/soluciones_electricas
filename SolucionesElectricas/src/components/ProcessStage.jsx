import React from "react";
import { motion } from "framer-motion";

const ProcessStage = ({ title, description, Icon, isReversed, delay }) => {
  return (
    <motion.div
      className={`mb-8 flex justify-between items-center w-full ${isReversed ? "flex-row-reverse" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <Icon className="mx-auto text-white" />
      </div>
      <div className={`order-1 ${isReversed ? "bg-gray-900 text-white" : "bg-white"} rounded-lg shadow-xl w-5/12 px-6 py-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg`}>
        <h3 className={`mb-1 font-bold text-${isReversed ? "white" : "gray-800"} text-xl`}>{title}</h3>
        <p className={`leading-snug text-${isReversed ? "gray-300" : "gray-700"} text-base`}>
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProcessStage;
