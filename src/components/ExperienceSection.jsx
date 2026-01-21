import React from "react";
import { ChevronRight, Calendar, Briefcase } from "lucide-react";
import { experiences } from "../data/portfolioData";

const ExperienceSection = ({ theme, darkMode }) => {
  // Normalize theme tokens with light/dark fallbacks (matching ProjectsSection)
   const palette = {
    textPrimary:
      theme.textWhite ||
      theme.text ||
      (darkMode ? "text-white" : "text-neutral-900"),
    textMuted:
      theme.textMuted || (darkMode ? "text-neutral-400" : "text-neutral-600"),
    textSubtle:
      theme.textSubtle || (darkMode ? "text-neutral-500" : "text-neutral-500"),
    cardBg: theme.cardBg || (darkMode ? "bg-neutral-900/40" : "bg-white/40"),
    cardBorder:
      theme.cardBorder ||
      (darkMode ? "border-neutral-800" : "border-neutral-200"),
    cardHoverBorder:
      theme.cardHoverBorder ||
      (darkMode ? "border-neutral-700" : "border-neutral-300"),
    cardHoverBg:
      theme.cardHoverBg || (darkMode ? "bg-neutral-900/60" : "bg-white/60"),
    chipBg: theme.chipBg || (darkMode ? "bg-neutral-900" : "bg-neutral-100"),
    hr:
      theme.hr ||
      theme.cardBorder ||
      (darkMode ? "border-neutral-800" : "border-neutral-200"),
  };

  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className={`text-sm ${palette.textSubtle} mb-1`}>Career Path</p>
          <h2 className={`text-3xl font-bold ${palette.textPrimary}`}>
            Experience & Impact
          </h2>
        </div>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className={` relative flex flex-col ${palette.cardBg} border ${palette.cardBorder} rounded-2xl p-6 sm:p-8 hover:${palette.cardHoverBorder} hover:${palette.cardHoverBg} transition-all duration-300`}
          >
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
              <div>
                <h3
                  className={`text-xl font-bold ${palette.textPrimary} mb-1 `}
                >
                  {exp.role}
                </h3>
                <div className="flex items-center gap-2">
                  <Briefcase size={14} className={palette.textSubtle} />
                  <p className={`text-sm ${palette.textMuted} font-medium`}>
                    {exp.company}
                  </p>
                </div>
              </div>
              <span
                className={`text-xs font-medium ${palette.textSubtle} ${palette.chipBg} border ${palette.cardBorder} px-3 py-1.5 rounded-full flex items-center gap-1.5 whitespace-nowrap transition-colors group-hover:border-orange-500/30 group-hover:text-orange-500`}
              >
                <Calendar size={12} />
                {exp.period}
              </span>
            </div>

            <ul className="space-y-3">
              {exp.highlights.map((highlight, i) => (
                <li
                  key={i}
                  className={`text-sm ${palette.textMuted} flex items-start gap-3 group/item`}
                >
                  <ChevronRight
                    size={16}
                    className="text-orange-400 mt-0.5 shrink-0 group-hover/item:translate-x-0.5 transition-transform"
                  />
                  <span className="leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
