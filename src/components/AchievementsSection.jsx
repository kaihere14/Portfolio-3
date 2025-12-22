import React from "react";
import { motion } from "framer-motion";
import { Trophy, ExternalLink, Hash } from "lucide-react";

const AchievementsSection = ({ theme, darkMode }) => {
  return (
    <section className="py-8">
      {/* Header with a raw, industrial look */}
      <div className="flex items-center gap-3 mb-10">
        <div className="h-6 w-[3px] bg-blue-600"></div>
        <h2 className={`text-sm font-mono font-black tracking-[0.3em] ${theme.textWhite} uppercase`}>
          / Recognition_Records
        </h2>
      </div>

      {/* The Achievement Card */}
      <motion.div 
        initial="rest"
        whileHover="hover"
        animate="rest"
        className={`group relative border border-neutral-800 hover:border-blue-900/50 p-6 transition-all duration-500 overflow-hidden ${
          darkMode ? "bg-[#0a0a0a]" : "bg-white"
        }`}
      >
        {/* Subtle Background Rank - Visual interest without "AI color fluff" */}
        <span className="absolute -right-2 -bottom-4 text-[120px] font-black italic opacity-[0.03] pointer-events-none group-hover:opacity-[0.06] transition-opacity font-sans leading-none">
          18
        </span>

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-[10px] font-mono tracking-widest text-blue-500 font-bold uppercase">
                  Global Finalist Status
                </span>
              </div>
              
              <h3 className={`text-3xl font-black ${theme.textWhite} tracking-tighter uppercase italic`}>
                HackFest 2025
              </h3>
              
              <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                Organized by GDG Cloud New Delhi × Agora
              </p>
            </div>

            <div className="flex flex-col md:items-end">
              <div className={`text-2xl font-mono font-black ${theme.textWhite}  flex items-baseline gap-1`}>
                <span className="text-blue-500 text-sm italic">#</span>18
                <span className="text-xs text-neutral-500 font-normal tracking-normal italic ml-2">/ 300+ Teams</span>
              </div>
              <p className={`text-[10px] ${theme.textSubtle} font-mono  mt-1 ${darkMode?"bg-neutral-900":"bg-gray-300"} px-2 py-0.5 self-start md:self-end`}>
                TOP 6% PERCENTILE
              </p>
            </div>
          </div>

          <p className={`mt-6 text-sm ${theme.textSubtle} max-w-2xl leading-relaxed border-l border-neutral-800 pl-4`}>
            Secured a position in the <span className={`${theme.textWhite} font-medium`}>Top 18</span> globally. 
            Engineered and pitched a technical MVP within a strict 24-hour window. One of only 21 teams 
            selected for the final evaluation phase.
          </p>

          {/* Footer: Fixed position, reveals on Parent Hover */}
          <motion.div 
            variants={{
              rest: { opacity: 0.4, y: 5 },
              hover: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mt-8 pt-6 border-t border-neutral-800/50 flex flex-wrap items-center gap-x-8 gap-y-3"
          >
            <a
              href="https://www.creadefy.com/verify/CERT-4CB901B3-F587-4535"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[11px] font-mono font-bold text-blue-500/80 hover:text-blue-400 transition-colors group/link"
            >
              <ExternalLink size={14} className="group-hover/link:scale-110 transition-transform" />
              HTTP://VERIFY_CREDENTIAL
            </a>

            <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-600">
              <Hash size={12} className="opacity-50" />
              <span>REF_ID: CERT-4CB901B3-F587-4535</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AchievementsSection;