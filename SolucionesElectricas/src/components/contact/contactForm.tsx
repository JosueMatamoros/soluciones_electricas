import React from 'react';
import { Card, CardBody, Input, Button, Typography, Textarea } from '@material-tailwind/react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactForm: React.FC = () => {
  return (
    <div className="flex justify-center items-center p-8 rounded-md w-full bg-gray-50">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Formulario de Contacto */}
        <Card className="bg-white shadow-lg rounded-lg p-6 ">
          <CardBody>
            <Typography variant="h5" className="text-black mb-4 font-bold">
              Contáctanos
            </Typography>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <Input label="Nombre" className="mb-4" />
              </div>
              <div>
                <Input label="Apellido"  className="mb-4" />
              </div>
              <div className="col-span-2">
                <Input label="Correo Electrónico" className="mb-4" />
              </div>
              <div className="col-span-2">
                {/* Cambié el Input a Textarea para que el mensaje tenga más espacio */}
                <Textarea label="Mensaje"  className="mb-4 h-32" />
              </div>
              <div className="col-span-2 flex justify-center">
                <Button className="w-full bg-black text-white hover:bg-gray-800">
                  ENVIAR MENSAJE
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>

        {/* Información de Contacto */}
        <Card className="bg-black text-white shadow-lg rounded-lg p-6">
          <CardBody>
            <Typography variant="h5" className="font-bold mb-4">
              Información de Contacto
            </Typography>
            <Typography className="text-gray-400 mb-6">
              ¿Necesitas más información? Ponte en contacto con nosotros.
            </Typography>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-xl" />
                <div>
                  <Typography variant="small" className="font-bold">Contactanos via correo</Typography>
                  <span>yarielsibaja@gmail.com</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-xl" />
                <div>
                  <span>&nbsp;Yariel Sibaja<br />+506 6135-0349<br /></span>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default ContactForm;
