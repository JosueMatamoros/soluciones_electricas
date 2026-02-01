import React from 'react';

const whatsappNumber = "50661350349";
const whatsappMessage = "Hola, me gustaría obtener más información.";
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

const WhatsAppBubble = () => {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-0  right-0 sm:bottom-6 sm:right-6 z-50"
      aria-label={whatsappMessage}
      title={whatsappMessage}
    >
      <img
        src="/WhatsAppLogo.webp"
        alt="WhatsApp Logo"
        className="w-20 h-20 drop-shadow-lg hover:scale-110 transition-transform duration-200"
      />
    </a>
  );
};

export default WhatsAppBubble;
