import React from "react";
import { MapPin, Mail, Phone, Facebook, Instagram, Send } from "lucide-react";

const TO_EMAIL = "1002matamoros@gmail.com";

export default function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());

    if (!data.name || !data.phone || !data.message) {
      alert("Por favor completa nombre, teléfono y mensaje.");
      return;
    }

    const subject = "Nuevo mensaje desde el sitio web";
    const body =
      `Nombre: ${data.name}\n` +
      `Teléfono: ${data.phone}\n\n` +
      `Mensaje:\n${data.message}\n`;

    const mailto = `mailto:${TO_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <section className="w-full px-4 py-10">
      <div className="mx-auto max-w-6xl">
        {/* Padre SIN bg-white para que no aparezca halo blanco en esquinas */}
        <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5 bg-transparent">
          {/* =========================
              MOBILE (stacked)
              ========================= */}
          <div className="block md:hidden">
            {/* CONTACTO (arriba completo) */}
            <aside className="relative bg-[#0b1b2b] px-8 py-10 text-white">
              <h2 className="text-3xl font-bold tracking-tight">
                Información de Contacto
              </h2>
              <p className="mt-3 max-w-sm text-sm text-white/70">
                Estamos disponibles para atenderte por cualquiera de estos
                medios.
              </p>

              <div className="mt-10 space-y-6">
                <InfoRow
                  icon={MapPin}
                  text="La Fortuna, San Carlos, Costa Rica"
                  alignText
                />
                <InfoRow
                  icon={Mail}
                  text="contacto@empresaelectrica.com"
                  alignText
                />

                <div className="flex flex-col gap-3 pt-2">
                  <WhatsAppButton
                    phoneE164="50661350349"
                    label="+506 6135-0349"
                  />
                  <CallButton phoneE164="50661350349" label="+506 6135-0349" />
                </div>
              </div>

              <div className="mt-10 flex w-full gap-4">
                <SocialLink ariaLabel="Facebook" href="https://facebook.com/">
                  <Facebook className="h-7 w-7" />
                </SocialLink>
                <SocialLink ariaLabel="Instagram" href="https://instagram.com/">
                  <Instagram className="h-7 w-7" />
                </SocialLink>
              </div>

              <div className="pointer-events-none absolute -bottom-24 -left-24 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl" />
            </aside>

            {/* FORM (abajo completo) */}
            <div className="bg-white px-8 py-10">
              <h2 className="text-3xl font-bold tracking-tight text-black">
                Envíanos un mensaje
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                Completa el formulario y te responderemos a la brevedad.
              </p>

              <form className="mt-10 space-y-8" onSubmit={handleSubmit}>
                <Field
                  label="Tu nombre"
                  name="name"
                  placeholder="Tu nombre"
                  required
                />

                <Field
                  label="Tu teléfono"
                  name="phone"
                  type="tel"
                  placeholder="Tu teléfono (ej: +506 8888-8888)"
                  required
                />

                <TextArea
                  label="Mensaje"
                  name="message"
                  placeholder="Describe tu proyecto o consulta..."
                  rows={5}
                  required
                />

                <button
                  type="submit"
                  className="h-16 w-full rounded-2xl bg-cyan-500 px-10 text-sm font-semibold text-white shadow-lg transition-transform duration-200 hover:bg-cyan-600 hover:scale-105 focus:outline-none"
                >
                  <span className="inline-flex items-center justify-center gap-2">
                    <Send className="h-4 w-4" />
                    ENVIAR
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* =========================
              DESKTOP (aligned grid rows)
              ========================= */}
          <div className="hidden md:block">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2">
                {/* FILA 1: TITULOS */}
                <div className="bg-[#0b1b2b] px-10 pt-10 text-white">
                  <h2 className="text-3xl font-bold tracking-tight">
                    Información de Contacto
                  </h2>
                </div>

                {/* derecha por fila: bg-white */}
                <div className="bg-white px-10 pt-10">
                  <h2 className="text-3xl font-bold tracking-tight text-black">
                    Envíanos un mensaje
                  </h2>
                </div>

                {/* FILA 2: DESCRIPCIONES */}
                <div className="bg-[#0b1b2b] px-10 pb-6 text-white">
                  <p className="mt-3 max-w-sm text-sm text-white/70">
                    Estamos disponibles para atenderte por cualquiera de estos
                    medios.
                  </p>
                </div>

                <div className="bg-white px-10 pb-6">
                  <p className="mt-3 text-sm text-black dark:text-black">
                    Completa el formulario y te responderemos a la brevedad.
                  </p>
                </div>

                {/* FILA 3: UBICACION ↔ NOMBRE */}
                <div className="bg-[#0b1b2b] px-10 py-4 text-white">
                  <InfoRow
                    icon={MapPin}
                    text="La Fortuna, San Carlos, Costa Rica"
                    alignText
                  />
                </div>

                <div className="bg-white px-10 py-4">
                  <Field
                    label="Tu nombre"
                    name="name"
                    placeholder="Tu nombre"
                    required
                  />
                </div>

                {/* FILA 4: EMAIL ↔ TELEFONO */}
                <div className="bg-[#0b1b2b] px-10 py-4 text-white">
                  <InfoRow
                    icon={Mail}
                    text="contacto@empresaelectrica.com"
                    alignText
                  />
                </div>

                <div className="bg-white px-10 py-4">
                  <Field
                    label="Tu teléfono"
                    name="phone"
                    type="tel"
                    placeholder="Tu teléfono (ej: +506 8888-8888)"
                    required
                  />
                </div>

                {/* FILA 5: WHATSAPP+LLAMAR ↔ MENSAJE (misma altura) */}
                <div className="bg-[#0b1b2b] px-10 py-4 text-white">
                  <div className="grid h-full grid-rows-2 gap-3">
                    <div className="h-full">
                      <WhatsAppButton
                        phoneE164="50661350349"
                        label="+506 6135-0349"
                      />
                    </div>
                    <div className="h-full">
                      <CallButton
                        phoneE164="50661350349"
                        label="+506 6135-0349"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-white px-10 py-4">
                  <TextArea
                    label="Mensaje"
                    name="message"
                    placeholder="Describe tu proyecto o consulta..."
                    required
                    className="min-h-[140px]"
                  />
                </div>

                {/* FILA 6: SOCIALS ↔ ENVIAR (misma altura/tamaño) */}
                <div className="relative bg-[#0b1b2b] px-10 py-6 text-white">
                  <div className="flex w-full gap-4">
                    <SocialLink
                      ariaLabel="Facebook"
                      href="https://facebook.com/"
                    >
                      <Facebook className="h-7 w-7" />
                    </SocialLink>
                    <SocialLink
                      ariaLabel="Instagram"
                      href="https://instagram.com/"
                    >
                      <Instagram className="h-7 w-7" />
                    </SocialLink>
                  </div>

                  <div className="pointer-events-none absolute -bottom-24 -left-24 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl" />
                </div>

                <div className="bg-white px-10 py-6">
                  <button
                    type="submit"
                    className="h-16 w-full rounded-2xl bg-cyan-500 px-10 text-sm font-semibold text-white shadow-lg transition-transform duration-200 hover:bg-cyan-600 hover:scale-105 focus:outline-none"
                  >
                    <span className="inline-flex items-center justify-center gap-2">
                      <Send className="h-4 w-4" />
                      ENVIAR
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon: Icon, text, iconClass = "text-cyan-400", alignText }) {
  return (
    <div className="flex items-center gap-4">
      <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400">
        <Icon className={`h-5 w-5 ${iconClass}`} />
      </span>
      <p
        className={`text-sm leading-6 text-white/80 ${alignText ? "mt-1" : ""}`}
      >
        {text}
      </p>
    </div>
  );
}

function WhatsAppButton({ phoneE164, label }) {
  return (
    <button
      type="button"
      aria-label="WhatsApp"
      onClick={() => window.open(`https://wa.me/${phoneE164}`, "_blank")}
      className="group flex w-full items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 text-left text-white/90 shadow-sm ring-1 ring-white/10 transition-transform duration-200 hover:bg-white/15 hover:scale-105"
    >
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-green-500/20">
        <img src="/WhatsAppLogo.webp" alt="WhatsApp" className="h-11 w-11" />
      </span>

      <span className="flex flex-col">
        <span className="text-sm font-semibold leading-5">WhatsApp</span>
        <span className="text-xs text-white/70">{label}</span>
      </span>

      <span className="ml-auto text-xs text-white/60 group-hover:text-white/80">
        Abrir
      </span>
    </button>
  );
}

function CallButton({ phoneE164, label }) {
  return (
    <a
      href={`tel:+${phoneE164}`}
      aria-label="Llamar"
      className="group flex w-full items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 text-left text-white/90 shadow-sm transition-transform duration-200 hover:bg-white/15 hover:scale-105"
    >
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500/20">
        <Phone className="h-5 w-5 text-cyan-400" />
      </span>

      <span className="flex flex-col">
        <span className="text-sm font-semibold leading-5">Llamar</span>
        <span className="text-xs text-white/70">{label}</span>
      </span>

      <span className="ml-auto text-xs text-white/60 group-hover:text-white/80">
        Marcar
      </span>
    </a>
  );
}

function SocialLink({ children, ariaLabel, href }) {
  return (
    <div className="flex w-full items-center justify-center gap-2 rounded-xl bg-white/10 p-2 transition-transform duration-200 hover:bg-white/20 hover:scale-105">
      <a
        aria-label={ariaLabel}
        href={href}
        target="_blank"
        rel="noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full"
      >
        {children}
      </a>
      <span className="text-sm font-semibold">{ariaLabel}</span>
    </div>
  );
}

function Field({ label, className = "", ...props }) {
  return (
    <div className="w-full">
      <label className="sr-only">{label}</label>
      <input
        className={
          "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm outline-none placeholder:text-slate-400 " +
          "focus:border-cyan-500 focus:outline-none " +
          className
        }
        {...props}
      />
    </div>
  );
}

function TextArea({ label, className = "", ...props }) {
  return (
    <div className="w-full">
      <label className="sr-only">{label}</label>
      <textarea
        className={
          "w-full resize-none rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-700 shadow-sm outline-none placeholder:text-slate-400 " +
          "focus:border-cyan-500 focus:outline-none " +
          className
        }
        {...props}
      />
    </div>
  );
}
