import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

/**
 * FAQAccordion - Componente de preguntas frecuentes con toggle
 * @param {Array} faqs - [{ question: string, answer: string }]
 */
export default function FAQAccordion({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="rounded-2xl bg-white/95 dark:bg-dark-bg-secondary/95 shadow-xl border border-brand-cyan/20">
      {faqs.map((faq, idx) => (
        <div key={idx} className="group">
          <button
            className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none hover:bg-brand-cyan/20 hover:shadow-lg transition-all rounded-xl"
            onClick={() => toggle(idx)}
            aria-expanded={openIndex === idx}
          >
            <span className="font-semibold text-brand-cyan text-base">{faq.question}</span>
            <ChevronDown className={`ml-4 w-5 h-5 transition-transform duration-300 text-brand-cyan-dark ${openIndex === idx ? 'rotate-180' : ''}`} />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out bg-brand-cyan/5 ${openIndex === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <div className="px-6 pb-4 pt-2 text-black dark:text-white text-base">
              {faq.answer}
            </div>
          </div>
          {/* Línea divisoria parcial, solo entre elementos, no después del último */}
          {idx < faqs.length - 1 && (
            <div className="w-[90%] mx-auto h-px bg-brand-cyan/20 group-hover:bg-brand-cyan/40 transition-colors duration-200" />
          )}
        </div>
      ))}
    </div>
  );
}
