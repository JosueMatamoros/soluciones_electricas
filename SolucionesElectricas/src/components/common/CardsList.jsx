import ServiceCard from "../common/ServiceCard";
import React from "react";

// Unificado: antes VerticalCarousel, ahora CardsList
export default function CardsList({ services }) {
  return (
    <div className="flex flex-col gap-6">
      {services.map((service) => (
        <div
          key={service.id}
          className="transition-all duration-300 px-4 scale-100 opacity-100 blur-0"
          style={{ minHeight: "280px" }}
        >
          <ServiceCard
            id={service.id}
            title={service.title}
            image={service.image}
            description={service.description}
          />
        </div>
      ))}
    </div>
  );
}
