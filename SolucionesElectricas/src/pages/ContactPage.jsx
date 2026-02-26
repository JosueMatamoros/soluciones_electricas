import React from "react";
import { useTranslation } from "react-i18next";
import ContactSection from "../components/contact/ContactSection";
import SectionHeader2 from "../components/common/SectionHeader2";

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <div className="mx-auto max-w-6xl px-2 sm:px-4 py-6 sm:py-10">
      <SectionHeader2
        badgeText={t("contact.header.badge")}
        title={t("contact.header.title")}
        description={t("contact.header.description")}
      />
      <ContactSection />
    </div>
  );
}
