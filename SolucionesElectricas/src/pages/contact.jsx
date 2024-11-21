import React from "react";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import ContactForm from "../components/contact/contactForm";
import { Button, Typography } from "@material-tailwind/react";

const phoneNumber = "+506 6135 0349";
const emailAddress = "yarielSS@gmail.com";
const whatsappNumber = "50661350349";
const whatsappMessage = "Hola, me gustaría obtener más información.";
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <Typography variant="h2" className="font-bold mb-4">
          Contáctanos
        </Typography>
        <Typography className="text-lg text-gray-700">
          Estamos aquí para ayudarte. Ponte en contacto con nosotros por
          cualquiera de los siguientes medios.
        </Typography>
      </div>
      <ContactForm />
      <div className="text-center mb-12 mt-8">
        <Typography variant="h4" className="font-semibold mb-4">
          ¿Prefieres usar WhatsApp?
        </Typography>
        <Typography className="text-lg text-gray-700 mb-6">
          Haz clic en el botón de abajo para iniciar una conversación con
          nosotros en WhatsApp.
        </Typography>
        <Button
          onClick={() => window.open(whatsappUrl, "_blank")}
          className="bg-green-500 hover:bg-green-600"
        >
          <div className="flex items-center">
            <FaWhatsapp className="text-xl mr-2" />
            <span>Chatea con nosotros</span>
          </div>
        </Button>
      </div>
      {/* Page Header */}

      {/* Contact Information */}
      <div className="flex flex-col md:flex-row justify-around items-center mb-12">
        {/* Phone */}
        <div className="flex items-center mb-6 md:mb-0">
          <FaPhoneAlt className="text-green-500 text-3xl mr-4" />
          <div>
            <Typography variant="h5" className="font-semibold">
              Llámanos
            </Typography>
            <a
              href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
              className="text-blue-500 hover:underline"
            >
              {phoneNumber}
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center mb-6 md:mb-0">
          <FaEnvelope className="text-red-500 text-3xl mr-4" />
          <div>
            <Typography variant="h5" className="font-semibold">
              Envíanos un correo
            </Typography>
            <a
              href={`mailto:${emailAddress}`}
              className="text-blue-500 hover:underline"
            >
              {emailAddress}
            </a>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="flex items-center">
          <FaWhatsapp className="text-green-500 text-3xl mr-4" />
          <div>
            <Typography variant="h5" className="font-semibold">
              WhatsApp
            </Typography>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Envíanos un mensaje
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
