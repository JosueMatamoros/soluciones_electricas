// src/components/BackgroundCard.jsx
import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Button,
} from "@material-tailwind/react";
import placeholderImage from "../assets/placeholder.webp";

export default function BackgroundCard({ title, description, image = placeholderImage }) {
  return (
    <Card
      shadow={false}
      className="relative h-80 w-full max-w-sm overflow-hidden text-center bg-darkGray rounded-lg"
    >
      <CardHeader
        floated={false}
        shadow={false}
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Overlay Gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
      </CardHeader>
      <CardBody className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-300">{description}</p>
        <Button
          size="sm"
          className="mt-4 bg-primary text-white hover:bg-primaryDark"
          onClick={() => alert(`Más información sobre ${title}`)}
        >
          Ver más
        </Button>
      </CardBody>
    </Card>
  );
}


