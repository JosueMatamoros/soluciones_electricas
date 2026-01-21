import React from "react";
import PropTypes from "prop-types";


export default function SectionHeader({ badge, badgeIcon: BadgeIcon, title, description }) {
  return (
    <div className="relative text-center mb-2 md:mb-4">
      {/* Decorative background element */}
      <div className="absolute inset-0 -top-8 flex items-center justify-center pointer-events-none">
        <div className="w-64 h-64 bg-[#22D3EE]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative">
        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#22D3EE]" />
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase text-[#22D3EE]">
              {BadgeIcon && (
                <span className="flex items-center justify-center size-6 rounded-md bg-[#22D3EE]/10">
                  <BadgeIcon className="size-3.5" />
                </span>
              )}
              {badge}
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#22D3EE]" />
          </div>
        )}

        {/* Title with gradient accent */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] dark:text-white mb-8 text-balance leading-tight">
          <span className="relative inline">
            <span
              className="absolute -bottom-1 left-0 right-0 h-3 sm:h-4 bg-[#22D3EE]/25 -rotate-[0.5deg] rounded-sm"
              style={{
                clipPath: "polygon(2% 40%, 0% 70%, 1% 100%, 98% 95%, 100% 50%, 99% 10%, 97% 0%, 3% 5%)",
              }}
            />
            <span className="relative">{title}</span>
          </span>
        </h2>

        {/* Description */}
        {description && (
          <p className="text-[#64748B] text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-pretty leading-relaxed">
            {description}
          </p>
        )}

        {/* Decorative dots */}
        <div className="flex items-center justify-center gap-1.5 mt-4">
          <span className="size-1.5 rounded-full bg-[#22D3EE]" />
          <span className="size-1 rounded-full bg-[#22D3EE]/60" />
          <span className="size-1 rounded-full bg-[#22D3EE]/30" />
        </div>
      </div>
    </div>
  );
}

SectionHeader.propTypes = {
  badge: PropTypes.string,
  badgeIcon: PropTypes.elementType,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};
