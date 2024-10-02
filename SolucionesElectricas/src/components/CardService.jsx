import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
  
  export function ServiceCard({ imageSrc, title, description }) {
    return (
      <Card className="w-full max-w-[22rem] shadow-lg min-h-[28rem] md:max-h-[20rem]">
        <CardHeader floated={false} color="blue-gray" className="h-[250px]">
          <img
            src={imageSrc}
            alt={title}
            className="h-full w-full object-cover"
          />
        </CardHeader>
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
  