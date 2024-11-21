import React from "react";
import { Typography } from "@material-tailwind/react";
import Logo from "../../public/logo.png";

export function ComingSoon() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="flex justify-self-center mt-72">
      <div className="flex flex-col items-center space-y-6">
        {/* Logo */}
        <img
          src={Logo}
          alt="Logo"
          className="w-24 h-24"
        />

        {/* Título */}
        <Typography
          variant="h3"
          className="text-center font-bold text-black"
        >
          ¡Estamos trabajando en algo increíble!
        </Typography>

        {/* Descripción */}
        <Typography
          variant="lead"
          className="text-center"
        >
          Pronto estaremos en línea. Mantente atento.
        </Typography>


      </div>
    </section>
  );
}

export default ComingSoon;
