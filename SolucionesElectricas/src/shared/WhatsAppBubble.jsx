import React from 'react';
import { WHATSAPP_URL, WHATSAPP_MESSAGE } from "../constants/contact";

const WhatsAppBubble = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-0  right-0 sm:bottom-6 sm:right-6 z-50"
      aria-label={WHATSAPP_MESSAGE}
      title={WHATSAPP_MESSAGE}
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
