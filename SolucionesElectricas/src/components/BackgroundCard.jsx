import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Typography
} from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';

export default function BackgroundCard({ title, description, image = placeholderImage, path = "/" }) {
  const navigate = useNavigate(); 

  return (
    <Card
      shadow={true}
      className="relative h-96 w-full max-w-sm overflow-hidden text-center rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
    >
      <CardHeader
        floated={false}
        shadow={false}
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Overlay con Gradiente para oscurecer la imagen */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
      </CardHeader>
      <CardBody className="absolute bottom-0 left-0 right-0 p-6 text-white">
        {/* Título del Card */}
        <Typography variant="h5" className="font-bold mb-2">
          {title}
        </Typography>
        {/* Descripción con tipografía ajustada */}
        <Typography variant="paragraph" className="text-gray-300">
          {description}
        </Typography>
        <Button
          size="lg"
          className="mt-6 bg-white text-black font-semibold shadow-md hover:bg-gray-200 hover:shadow-lg transition duration-300 ease-in-out"
          onClick={() => navigate(path)} 
        >
          Ver más
        </Button>
      </CardBody>
    </Card>
  );
}
