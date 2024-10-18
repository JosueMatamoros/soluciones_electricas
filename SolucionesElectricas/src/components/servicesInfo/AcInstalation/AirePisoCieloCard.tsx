import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import PisoCielo from "../../../assets/services/AcInstalation/pisoCielo.jpg";

const AirePisoCieloCard = () => {
  return (
    <div className="flex bg-white shadow-lg rounded-lg p-6">
      <div className="flex-shrink-0 w-48 h-48 bg-gray-200 flex items-center justify-center">
        <img
          src={PisoCielo}
          alt="Aire Piso-Cielo"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="ml-6">
        <h3 className="text-2xl font-bold">Aire Piso-Cielo</h3>
        <p className="text-gray-600 mt-2">
          Solución de alto rendimiento para espacios industriales y comerciales. Ideal para grandes áreas, con instalación flexible en suelo o techo.
        </p>
        <ul className="mt-4 space-y-2">
          <li className="flex items-center">
            <FaCheckCircle className="text-green-500 mr-2" />
            Capacidad de Enfriamiento: 60,000 BTU
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="text-green-500 mr-2" />
            Flujo de Aire: 2,000 m³/h
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="text-green-500 mr-2" />
            Consumo Energético: 5.5 kWh
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="text-green-500 mr-2" />
            Refrigerante: R-410A
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AirePisoCieloCard;
