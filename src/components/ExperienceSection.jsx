import React from "react";
import { Target, ChevronRight } from "lucide-react";
import { experiences } from "../data/portfolioData";

const ExperienceSection = ({ theme, darkMode }) => {
  return (
    <section className="space-y-6">
      <h2
        className={`text-xl font-bold ${theme.textWhite} flex items-center gap-2`}
      >
        <Target size={20} className="text-orange-400" /> Experience & Impact
      </h2>
      {experiences.map((exp, idx) => (
        <div
          key={idx}
          className={`${
            darkMode ? "bg-neutral-900/30" : "bg-neutral-50/30"
          } border ${theme.cardBorder} rounded-2xl p-6 hover:${
            darkMode ? "bg-neutral-900/50" : "bg-neutral-50/50"
          } hover:${
            theme.cardHoverBorder
          } transition-all duration-300 group`}
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3
                className={`text-lg font-bold ${theme.textWhite} group-hover:text-orange-400 transition-colors`}
              >
                {exp.role}
              </h3>
              <p className={`text-sm ${theme.textMuted}`}>{exp.company}</p>
            </div>
            <span
              className={`text-xs ${theme.textSubtle} ${
                darkMode ? "bg-neutral-900" : "bg-neutral-200"
              } border ${theme.cardBorder} px-3 py-1 rounded-full`}
            >
              {exp.period}
            </span>
          </div>
          <ul className="space-y-2">
            {exp.highlights.map((highlight, i) => (
              <li
                key={i}
                className={`text-sm ${
                  theme.textMuted
                } flex items-start gap-2 group-hover:${
                  darkMode ? "text-neutral-300" : "text-neutral-700"
                } transition-colors`}
              >
                <ChevronRight
                  size={16}
                  className="text-orange-400 mt-0.5 shrink-0"
                />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default ExperienceSection;

