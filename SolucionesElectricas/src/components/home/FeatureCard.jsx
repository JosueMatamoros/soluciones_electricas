import React from "react";

export function FeatureCard({ title, description, Icon }) {
  return (
    <article
      className={[
        "group rounded-2xl border p-6 shadow-sm transition-all duration-200",
        "border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg",
        "hover:border-brand-cyan dark:hover:border-brand-cyan hover:scale-105",
      ].join(" ")}
    >
      <div className="mb-2 flex items-center gap-3">
        {Icon ? (
          <div
            className={[
              "grid h-12 w-12 min-w-[3rem] max-w-[3rem] place-items-center rounded-xl transition-colors duration-200",
              "bg-light-bg-tertiary dark:bg-dark-bg-tertiary",
              "group-hover:bg-brand-cyan/10"
            ].join(" ")}
          >
            <Icon className="h-6 w-6 text-light-text-secondary dark:text-dark-text-secondary transition-colors duration-200 group-hover:text-brand-cyan" />
          </div>
        ) : null}
        <h3 className="text-xl font-extrabold text-light-text dark:text-dark-text m-0 break-words">{title}</h3>
      </div>
      <p className="text-sm leading-6 text-light-text-muted dark:text-dark-text-muted">{description}</p>
    </article>
  );
}
