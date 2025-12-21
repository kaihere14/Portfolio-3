import React from "react";
import { LayoutTemplate, Linkedin, Github, Mail } from "lucide-react";

const FloatingDock = ({ theme, darkMode }) => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div
        className={`flex items-center gap-1 p-2 ${theme.dockBg} backdrop-blur-xl border ${theme.dockBorder} rounded-full shadow-2xl shadow-black/50 hover:shadow-orange-900/20 transition-all duration-300`}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`p-3 rounded-full ${theme.dockHoverBg} ${theme.textMuted} hover:${theme.textWhite} hover:scale-110 transition-all duration-300 relative group`}
        >
          <LayoutTemplate size={20} />
          <span
            className={`absolute -top-10 left-1/2 -translate-x-1/2 ${theme.tooltipBg} ${theme.textWhite} text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap`}
          >
            Home
          </span>
        </button>
        <div
          className={`w-px h-4 ${
            darkMode ? "bg-neutral-800" : "bg-neutral-200"
          } mx-1`}
        ></div>
        <a
          href="https://www.linkedin.com/in/arman-thakur-303b47367/"
          target="_blank"
          rel="noreferrer"
          className={`p-3 rounded-full hover:bg-blue-900/30 ${theme.textMuted} hover:text-blue-400 hover:scale-110 transition-all duration-300 relative group`}
        >
          <Linkedin size={20} />
          <span
            className={`absolute -top-10 left-1/2 -translate-x-1/2 ${theme.tooltipBg} ${theme.textWhite} text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap`}
          >
            LinkedIn
          </span>
        </a>
        <a
          href="https://github.com/kaihere14"
          target="_blank"
          rel="noreferrer"
          className={`p-3 rounded-full ${theme.dockHoverBg} ${theme.textMuted} hover:${theme.textWhite} hover:scale-110 transition-all duration-300 relative group`}
        >
          <Github size={20} />
          <span
            className={`absolute -top-10 left-1/2 -translate-x-1/2 ${theme.tooltipBg} ${theme.textWhite} text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap`}
          >
            GitHub
          </span>
        </a>
        <a
          href="mailto:armanthakur200814@gmail.com"
          className={`p-3 rounded-full hover:bg-orange-900/30 ${theme.textMuted} hover:text-orange-400 hover:scale-110 transition-all duration-300 relative group`}
        >
          <Mail size={20} />
          <span
            className={`absolute -top-10 left-1/2 -translate-x-1/2 ${theme.tooltipBg} ${theme.textWhite} text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap`}
          >
            Email
          </span>
        </a>
      </div>
    </div>
  );
};

export default FloatingDock;

