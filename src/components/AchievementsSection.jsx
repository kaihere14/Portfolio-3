import React from "react";
import { Trophy, Award } from "lucide-react";

const AchievementsSection = ({ theme, darkMode }) => {
  return (
    <section className="space-y-6">
      <h2
        className={`text-xl font-bold ${theme.textWhite} flex items-center gap-2`}
      >
        <Trophy size={20} className="text-yellow-500" /> Achievements &
        Recognition
      </h2>
      <div
        className={`${
          darkMode ? "bg-neutral-900/30" : "bg-neutral-50/30"
        } border ${
          theme.cardBorder
        } rounded-2xl p-6 relative overflow-hidden group hover:${
          darkMode ? "bg-neutral-900/50" : "bg-neutral-50/50"
        } hover:${theme.cardHoverBorder} transition-all duration-300`}
      >
        <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-500/10 blur-3xl rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-500"></div>
        <div className="space-y-5 relative z-10">
          <div className="flex items-start gap-4 group/item hover:translate-x-1 transition-transform duration-300">
            <div className="mt-1 p-2.5 bg-yellow-500/10 rounded-xl text-yellow-500 border border-yellow-500/20 group-hover:item:scale-110 transition-transform">
              <Trophy size={20} />
            </div>
            <div className="flex-1">
              <h3
                className={`${theme.textWhite} font-bold mb-1 group-hover:item:text-yellow-400 transition-colors`}
              >
                Top 5% Batch Rank
              </h3>
              <p className={`text-sm ${theme.textSubtle} mb-2`}>
                Amity University Mohali • B.E. Computer Science
              </p>
              <p className="text-xs text-neutral-600">
                Maintained consistent academic excellence throughout the
                program
              </p>
            </div>
          </div>
          <div
            className={`h-px ${
              darkMode ? "bg-neutral-800" : "bg-neutral-200"
            }`}
          ></div>
          <div className="flex items-start gap-4 group/item hover:translate-x-1 transition-transform duration-300">
            <div className="mt-1 p-2.5 bg-blue-500/10 rounded-xl text-blue-500 border border-blue-500/20 group-hover:item:scale-110 transition-transform">
              <Award size={20} />
            </div>
            <div className="flex-1">
              <h3
                className={`${theme.textWhite} font-bold mb-1 group-hover:item:text-blue-400 transition-colors`}
              >
                Runner-up in National Coding Competition
              </h3>
              <p className={`text-sm ${theme.textSubtle} mb-2`}>
                Competed against 2,000+ participants
              </p>
              <p className="text-xs text-neutral-600">
                Demonstrated problem-solving skills under time constraints
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;

