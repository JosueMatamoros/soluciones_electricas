import {
    Card,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
  
  export function ServiceCard({ imageSrc, title, description }) {
    return (
      <Card className="w-full max-w-[22rem] shadow-lg min-h-[16rem] md:max-h-[20rem]">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="font-medium mb-2 text-center">
            {title}
          </Typography>
          {/* Ocultar descripción en pantallas md y menores */}
        <Typography color="gray" className="text-center hidden md:block">
          {description}
        </Typography>
        </CardBody>
      </Card>
    );
  }
  