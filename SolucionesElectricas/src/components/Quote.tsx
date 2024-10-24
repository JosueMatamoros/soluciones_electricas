// src/components/Quote.tsx

import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { Card, Typography} from '@material-tailwind/react';

const Quote = () => {
  return (
    <div className="flex justify-center items-center bg-white py-10">
      <Card className="max-w-2xl p-8 text-center shadow-lg">
        {/* Cita con íconos */}
        <div className="relative mb-6">
          {/* Ícono de cita izquierda */}
          <FaQuoteLeft className="absolute -top-6 -left-6 text-4xl text-gray-300" />
          
          {/* Texto de la cita */}
          <Typography variant="lead" className="italic text-gray-700 font-serif px-6">
            Soluciones Eléctricas del norte, sí hay de otra.
          </Typography>
          
          {/* Ícono de cita derecha */}
          <FaQuoteRight className="absolute -bottom-6 -right-6 text-4xl text-gray-300" />
        </div> 
      </Card>
    </div>
  );
};

export default Quote;
