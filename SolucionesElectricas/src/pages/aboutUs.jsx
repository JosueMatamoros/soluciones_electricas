import React, { Component } from "react";
import { CompanyTimeline } from "../components/aboutUs/CompanyTimeline";
import { Card, CardBody, Typography } from "@material-tailwind/react";

export default class AboutUs extends Component {
  render() {
    return (
      <div className="bg-red-200 w-full">
        <CompanyTimeline />
        <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-8 mb-12">
      {/* Misión */}
      <Card className="w-full md:w-1/2 bg-white shadow-lg rounded-lg">
        <CardBody>
          <Typography variant="h5" className="font-bold text-center mb-4">
            Misión
          </Typography>
          <Typography variant="body1" className="text-gray-600 text-center">
            Proveer soluciones integrales en sistemas eléctricos, aires acondicionados, 
            y automatización para hogares e industrias, con un enfoque en calidad, 
            eficiencia y satisfacción del cliente.
          </Typography>
        </CardBody>
      </Card>

      {/* Visión */}
      <Card className="w-full md:w-1/2 bg-white shadow-lg rounded-lg">
        <CardBody>
          <Typography variant="h5" className="font-bold text-center mb-4">
            Visión
          </Typography>
          <Typography variant="body1" className="text-gray-600 text-center">
            Ser reconocidos como líderes en la región por la innovación y 
            calidad de nuestros servicios, expandiendo nuestro alcance a 
            nuevas áreas tecnológicas y manteniendo nuestro compromiso con 
            el desarrollo sostenible.
          </Typography>
        </CardBody>
      </Card>
    </div>

        
        
      </div>
    );
  }
}
