
import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/ThemeContext";
import { Check, Waves, Gauge } from "lucide-react";


// Eliminado CheckIcon, se usará <Check /> de lucide-react


function InverterLogo({ isDarkMode }) {
  const bg = isDarkMode ? "rgba(103,232,249,0.12)" : "rgba(34,211,238,0.12)";
  const border = isDarkMode ? "rgba(103,232,249,0.25)" : "rgba(34,211,238,0.25)";
  const color = isDarkMode ? "#67e8f9" : "#0891b2";
  return (
    <div
      className="grid rounded-2xl border place-items-center h-10 w-10 md:h-16 md:w-16"
      style={{ backgroundColor: bg, borderColor: border }}
    >
      <Waves className="h-6 w-6 md:h-10 md:w-10" color={color} />
    </div>
  );
}


function ConventionalLogo({ isDarkMode }) {
  const bg = isDarkMode ? "rgba(255,255,255,0.06)" : "rgba(15,23,42,0.04)";
  const border = isDarkMode ? "rgba(255,255,255,0.10)" : "rgba(148,163,184,0.40)";
  const color = isDarkMode ? "rgba(255,255,255,0.70)" : "#475569";
  return (
    <div
      className="grid rounded-2xl border place-items-center h-10 w-10 md:h-16 md:w-16"
      style={{ backgroundColor: bg, borderColor: border }}
    >
      <Gauge className="h-6 w-6 md:h-10 md:w-10" color={color} />
    </div>
  );
}

function MiniChart({ variant, isDarkMode, behaviorLabel, tempLabel, smoothLabel, onOffLabel }) {
  const gridStroke = isDarkMode ? "rgba(255,255,255,0.10)" : "rgba(148,163,184,0.35)";
  const axisStroke = isDarkMode ? "rgba(255,255,255,0.22)" : "rgba(100,116,139,0.40)";
  const textFill = isDarkMode ? "rgba(255,255,255,0.60)" : "rgba(15,23,42,0.65)";
  const lineStroke =
    variant === "inverter"
      ? isDarkMode
        ? "#67e8f9"
        : "#06b6d4"
      : isDarkMode
        ? "rgba(255,255,255,0.65)"
        : "rgba(71,85,105,0.85)";

  const wrapper = isDarkMode
    ? "border-dark-border bg-dark-bg-secondary"
    : "border-slate-200 bg-white";

  const subtitle =
    variant === "inverter"
      ? isDarkMode
        ? "text-cyan-300"
        : "text-cyan-600"
      : isDarkMode
        ? "text-dark-text-muted"
        : "text-slate-600";

  return (
    <div className={`mt-4 rounded-2xl border p-5 ${wrapper}`}>
      <div className={`${isDarkMode ? "text-dark-text-muted" : "text-slate-500"} text-xs font-semibold tracking-wide`}>
        {behaviorLabel}
      </div>

      <div className="mt-3">
        <svg viewBox="0 0 720 140" className="h-[90px] w-full">
          <line x1="0" y1="95" x2="720" y2="95" stroke={gridStroke} strokeWidth="2" />
          <line x1="0" y1="55" x2="720" y2="55" stroke={gridStroke} strokeWidth="2" />
          <line x1="0" y1="15" x2="720" y2="15" stroke={gridStroke} strokeWidth="2" />

          <line x1="560" y1="28" x2="720" y2="28" stroke={axisStroke} strokeWidth="3" />
          <text x="610" y="20" fill={textFill} fontSize="14" fontWeight="700">
            {tempLabel}
          </text>

          {variant === "inverter" ? (
            <path
              d="M40 78 C 120 35, 220 35, 300 78 S 480 120, 560 78 S 660 35, 700 78"
              stroke={lineStroke}
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
            />
          ) : (
            <path
              d="M40 92 L130 92 L130 38 L220 38 L220 92 L310 92 L310 38 L400 38 L400 92 L490 92 L490 38 L580 38 L580 92 L670 92 L670 38 L700 38"
              stroke={lineStroke}
              strokeWidth="6"
              fill="none"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          )}
        </svg>

        <div className={`mt-2 text-center text-sm font-semibold ${subtitle}`}>
          {variant === "inverter" ? smoothLabel : onOffLabel}
        </div>
      </div>
    </div>
  );
}

function AdvantageItem({ tone, isDarkMode, children }) {
  const ring =
    tone === "cyan"
      ? isDarkMode
        ? "border-cyan-300/35 bg-cyan-500/10"
        : "border-cyan-200 bg-cyan-50"
      : isDarkMode
        ? "border-white/12 bg-white/5"
        : "border-slate-200 bg-slate-50";

  const text = isDarkMode ? "text-dark-text" : "text-slate-700";

  return (
    <div className="flex items-center gap-3">
      <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border ${ring}`}>
        <Check className="h-4 w-4" color={tone === "cyan" ? (isDarkMode ? "#67e8f9" : "#0891b2") : (isDarkMode ? "rgba(255,255,255,0.65)" : "rgba(100,116,139,0.9)")} strokeWidth={2.5} />
      </div>
      <div className={`text-sm leading-6 ${text}`}>{children}</div>
    </div>
  );
}

function CompareCard({
  tone,
  recommended,
  title,
  subtitle,
  description,
  advantages,
  isDarkMode,
  recommendedBadgeText,
  mainAdvantagesText,
  behaviorLabel,
  tempLabel,
  smoothLabel,
  onOffLabel
}) {
  const bg = isDarkMode ? "bg-dark-bg-tertiary" : "bg-white";

  const border =
    tone === "cyan"
      ? isDarkMode
        ? "border-cyan-400/40"
        : "border-cyan-400"
      : isDarkMode
        ? "border-dark-border"
        : "border-slate-200";

  const titleColor = isDarkMode ? "text-dark-text" : "text-slate-900";
  const subColor =
    tone === "cyan"
      ? isDarkMode
        ? "text-cyan-300"
        : "text-cyan-600"
      : isDarkMode
        ? "text-white/70"
        : "text-slate-500";

  const bodyColor = isDarkMode ? "text-dark-text-secondary" : "text-slate-600";

  return (
    <div className={`relative rounded-[28px] border p-7 shadow-sm ${bg} ${border}`}>
      {recommended && (
        <div className="hidden md:block absolute right-6 top-6 ">
          <div className="rounded-full px-4 py-2 text-xs font-semibold shadow-sm bg-cyan-500 text-white">
            {recommendedBadgeText}
          </div>
        </div>
      )}

      <div className="flex items-start gap-2 md:gap-5">
        {tone === "cyan" ? (
          <InverterLogo isDarkMode={isDarkMode} />
        ) : (
          <ConventionalLogo isDarkMode={isDarkMode} />
        )}

        <div className="pt-1">
          <div className={`text-3xl font-extrabold tracking-tight ${titleColor}`}>{title}</div>
          <div className={`mt-1 text-sm font-semibold tracking-wide ${subColor}`}>{subtitle}</div>
        </div>
      </div>

      <MiniChart 
        variant={tone === "cyan" ? "inverter" : "conventional"} 
        isDarkMode={isDarkMode}
        behaviorLabel={behaviorLabel}
        tempLabel={tempLabel}
        smoothLabel={smoothLabel}
        onOffLabel={onOffLabel}
      />

      <p className={`mt-6 text-base leading-7 ${bodyColor}`}>{description}</p>

      <div className={`mt-6 text-base font-extrabold ${titleColor}`}>{mainAdvantagesText}</div>

      <div className="mt-4 space-y-4">
        {advantages.map((a) => (
          <AdvantageItem key={a} tone={tone} isDarkMode={isDarkMode}>
            {a}
          </AdvantageItem>
        ))}
      </div>
    </div>
  );
}

export default function AirConditioningComparisonSection() {
  const { t } = useTranslation();
  const { isDarkMode } = useTheme();

  const inverter = t("services.detail.climatizacion.comparison.inverter", { returnObjects: true });
  const conventional = t("services.detail.climatizacion.comparison.conventional", { returnObjects: true });

  return (
    <section className="mt-10">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <CompareCard
          tone="cyan"
          recommended={true}
          title={inverter.title}
          subtitle={inverter.subtitle}
          description={inverter.description}
          advantages={inverter.advantages}
          isDarkMode={isDarkMode}
          recommendedBadgeText={t("services.detail.climatizacion.comparison.recommendedBadge")}
          mainAdvantagesText={t("services.detail.climatizacion.comparison.mainAdvantages")}
          behaviorLabel={t("services.detail.climatizacion.comparison.compressorBehavior")}
          tempLabel={t("services.detail.climatizacion.comparison.tempLabel")}
          smoothLabel={t("services.detail.climatizacion.comparison.smoothAdjustment")}
          onOffLabel={t("services.detail.climatizacion.comparison.onOffCycles")}
        />
        <CompareCard
          tone="slate"
          recommended={false}
          title={conventional.title}
          subtitle={conventional.subtitle}
          description={conventional.description}
          advantages={conventional.advantages}
          isDarkMode={isDarkMode}
          recommendedBadgeText={t("services.detail.climatizacion.comparison.recommendedBadge")}
          mainAdvantagesText={t("services.detail.climatizacion.comparison.mainAdvantages")}
          behaviorLabel={t("services.detail.climatizacion.comparison.compressorBehavior")}
          tempLabel={t("services.detail.climatizacion.comparison.tempLabel")}
          smoothLabel={t("services.detail.climatizacion.comparison.smoothAdjustment")}
          onOffLabel={t("services.detail.climatizacion.comparison.onOffCycles")}
        />
      </div>
    </section>
  );
}
