import React from "react";
import { useTheme } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";
import videoFile from "../assets/videos/lightbulb_web.mp4";
import { Button } from "@material-tailwind/react";
import { Award, Wrench, ShieldCheck, Users, Wallet } from "lucide-react";
import { FeatureCard } from "../components/home/FeatureCard";
import { useNavigate } from "react-router-dom";

import ProcessTimeline from "../components/home/ProcessTimelineSection";

import ServicesCarousel from "../components/home/ServicesCarouselSection";
import FeaturedProjectsSection from "../components/home/FeaturedProjectsSection";
import ProjectCTA from "../components/home/ProjectCTA";

export default function HomePage() {
  const { isDarkMode } = useTheme();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const features = [
    {
      title: t('home.features.professional.title'),
      description: t('home.features.professional.description'),
      Icon: Wrench,
    },
    {
      title: t('home.features.quality.title'),
      description: t('home.features.quality.description'),
      Icon: ShieldCheck,
    },
    {
      title: t('home.features.personalized.title'),
      description: t('home.features.personalized.description'),
      Icon: Users,
    },
    {
      title: t('home.features.pricing.title'),
      description: t('home.features.pricing.description'),
      Icon: Wallet,
    },
  ];

  return (
    <div
      className={`flex flex-col min-h-screen w-full transition-colors duration-300 px-4 ${
        isDarkMode ? "bg-dark-bg" : "bg-light-bg"
      }`}
    >
      <section className="py-6 md:py-10">
        <div className="mx-auto max-w-6xl flex flex-col lg:flex-row-reverse items-center gap-6 lg:gap-10">
          <div className="w-full flex flex-col items-center lg:items-start justify-center text-center lg:text-left space-y-5 min-h-[320px]">
            <h1 className="text-4xl md:text-6xl   font-roboto-slab font-bold max-w-xl text-center lg:text-left transition-colors duration-300 text-light-text dark:text-dark-text">
              {t('home.hero.title')}
            </h1>
            <p className="text-lg md:text-xl max-w-lg text-slate-600 dark:text-slate-300 font-medium">
              {t('home.hero.description')}
              <br />
              <span className="font-roboto-slab font-bold  transition-colors duration-300 text-light-text dark:text-dark-text ">
                {t('home.hero.groupName')}
              </span>
              ,
              <span
                className="ml-2 text-2xl italic font-light text-[#22d3ee]"
                style={{ fontFamily: "Dancing Script, cursive" }}
              >
                {t('home.hero.slogan')}
              </span>
            </p>
            <Button
              className="mt-2 px-8 py-2 rounded-full bg-[#22d3ee] hover:bg-[#0891b2] text-white font-bold text-lg shadow-lg transition-colors duration-200"
              size="lg"
              onClick={() => navigate("/contacto")}
            >
              {t('home.hero.cta')}
            </Button>
          </div>
          <div className="w-full flex items-center justify-center min-h-[380px]">
            <div
              className="w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl border-4 border-[#22d3ee]/30 flex-1 p-0 bg-white dark:bg-dark-bg"
              style={{
                aspectRatio: "16/9",
                minHeight: "300px",
                height: "320px",
              }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-2xl"
                aria-label="Video de Soluciones Eléctricas"
                style={{
                  minHeight: "300px",
                  height: "320px",
                  background: "transparent",
                }}
              >
                <source src={videoFile} type="video/mp4" />
                {t('home.hero.videoError')}
              </video>
            </div>
          </div>
        </div>
      </section>

      <ServicesCarousel />

      {/* Features Section */}
      <section className="mx-auto max-w-6xl py-6  md:py-10">
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-light-border dark:border-dark-border bg-light-bg-tertiary dark:bg-dark-bg-tertiary px-4 py-2 text-sm font-semibold text-brand-cyan">
              <Award className="h-4 w-4" />
              {t('home.whyChoose.badge')}
            </div>

            <h2 className="mt-3 text-4xl font-extrabold leading-[1.05] text-light-text dark:text-dark-text">
              {t('home.whyChoose.title')} <span className="text-brand-cyan">{t('home.whyChoose.titleHighlight')}</span>
              <br />
              {t('home.whyChoose.titleLine2')}
            </h2>

            <p className="mt-2 max-w-xl text-base leading-7 text-light-text-muted dark:text-dark-text-muted">
              {t('home.whyChoose.description')}
            </p>

            <div className="mt-2 md:mt-4 flex lg:justify-start justify-center text-3xl md:text-4xl ">
              <div className="flex flex-row flex-wrap items-end gap-2">
                    <span className=" font-extrabold text-brand-cyan tracking-tight">{t('home.whyChoose.experienceYears')}</span>
                    <span className=" font-extrabold text-brand-cyan ml-1 tracking-tight">
                      {t('home.whyChoose.experienceLabel')}
                    </span>
                    <span className=" font-black text-light-text dark:text-dark-text ml-2 tracking-tight">
                      {t('home.whyChoose.experienceText')}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {features.map((f) => (
              <FeatureCard
                key={f.title}
                title={f.title}
                description={f.description}
                Icon={f.Icon}
              />
            ))}
          </div>
        </div>
      </section>
      <FeaturedProjectsSection />

      {/* Process Timeline Section */}
      <ProcessTimeline />
      <ProjectCTA />
    </div>
  );
}
