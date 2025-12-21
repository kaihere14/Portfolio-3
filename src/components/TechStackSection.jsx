import React from "react";
import { Cpu } from "lucide-react";
import { techStack } from "../data/portfolioData";

const TechStackSection = ({ theme, darkMode, hoveredTech, setHoveredTech }) => {
  return (
    <section className="space-y-6">
      <h2
        className={`text-xl font-bold ${theme.textWhite} flex items-center gap-2`}
      >
        <Cpu size={20} className="text-blue-400" /> Tech Stack & Tools
      </h2>
      <div className="flex flex-wrap gap-3">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            onMouseEnter={() => setHoveredTech(tech.name)}
            onMouseLeave={() => setHoveredTech(null)}
            className="relative group"
          >
            {/* ICON CONTAINER: Removed text, only shows icon now */}
            <div
              className={`flex items-center justify-center w-12 h-12 rounded-xl ${
                darkMode ? "bg-neutral-900" : "bg-neutral-100"
              } border ${theme.cardBorder} hover:${
                theme.cardHoverBorder
              } hover:${
                darkMode ? "bg-neutral-800" : "bg-neutral-200"
              } transition-all duration-300 cursor-pointer ${
                hoveredTech === tech.name
                  ? "scale-110 shadow-lg shadow-neutral-900 border-neutral-600"
                  : ""
              }`}
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-6 h-6 rounded-sm"
              />
            </div>

            {/* UPDATED TOOLTIP: Shows Name + Description */}
            <div
              className={`absolute -top-14 left-1/2 -translate-x-1/2 ${
                theme.tooltipBg
              } ${
                theme.text
              } text-xs py-2 px-3 rounded-lg whitespace-nowrap transition-all duration-200 pointer-events-none z-20 border ${
                theme.tooltipBorder
              } text-center ${
                hoveredTech === tech.name
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              }`}
            >
              <div className="font-bold mb-0.5">{tech.name}</div>
              <div className={`text-[10px] ${theme.textMuted} font-medium`}>
                {tech.desc}
              </div>
              <div
                className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 ${theme.tooltipBg} border-b border-r ${theme.tooltipBorder} rotate-45`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackSection;

