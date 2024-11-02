import React from "react";
import { IconButton } from "@material-tailwind/react";
import { FaWhatsapp } from "react-icons/fa";

const ChatBubble = () => {
  // Número de WhatsApp en formato internacional sin signos ni espacios
  const whatsappNumber = "50661350349";
  const whatsappMessage = "Hola, me gustaría obtener más información.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <IconButton
        onClick={() => window.open(whatsappUrl, "_blank")} 
        className="rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors"
        aria-label="Enviar mensaje por WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6" />
      </IconButton>
    </div>
  );
};

export default ChatBubble;
