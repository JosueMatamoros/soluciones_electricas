import React from "react";
import ContactSection from "../components/contact/ContactSection";
import SectionHeader2 from "../components/common/SectionHeader2";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-2 sm:px-4 py-6 sm:py-10">
      <SectionHeader2
        badgeText="Estamos para ayudarte"
        title="Contáctanos"
        description="¿Tienes un proyecto eléctrico en mente? Estamos listos para ayudarte. Escríbenos o llámanos y te responderemos a la brevedad."
      />
      <ContactSection />
    </div>
  );
}
