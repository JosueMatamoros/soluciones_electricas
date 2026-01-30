import React from "react";
import PropTypes from "prop-types";
import { Zap } from "lucide-react";

export default function SectionHeader2({
  badgeText,
  badgeIcon: BadgeIcon = Zap,
  title,
  description,
}) {
  return (
    <div className="relative text-center mb-2 md:mb-4 px-4">
      <div className="absolute inset-0 -top-8 flex items-center justify-center pointer-events-none">
        <div className="w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl">
        {/* Badge */}
        {badgeText && (
          <div className="inline-flex items-center gap-2 mb-2 rounded-full bg-cyan-50 px-4 py-2 text-xs font-semibold tracking-wide text-cyan-600">
            {BadgeIcon && (
              <span className="flex items-center justify-center size-6 rounded-md ">
                <BadgeIcon className="size-3.5" />
              </span>
            )}
            <span className="uppercase">{badgeText}</span>
          </div>
        )}

        {/* Title */}
        {title && (
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-2 text-balance leading-tight transition-colors duration-300">
            {title}
          </h2>
        )}

        {/* Description */}
        {description && (
          <p className="text-slate-500 text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-pretty leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

SectionHeader2.propTypes = {
  badgeText: PropTypes.string,
  badgeIcon: PropTypes.elementType,
  title: PropTypes.string,
  description: PropTypes.string,
};
