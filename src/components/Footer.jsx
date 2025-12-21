import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const Footer = ({ theme, darkMode }) => {
  return (
    <footer className="pt-12 pb-24 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8">
        <div className="text-center md:text-left">
          <p
            className={`${theme.textWhite} font-bold text-2xl mb-2 bg-linear-to-r ${theme.gradientText} bg-clip-text text-transparent`}
          >
            Let's build something amazing.
          </p>
          <p className={`${theme.textSubtle} text-sm mb-3`}>
            Open to freelance projects and collaborations
          </p>
          <a
            href="mailto:armanthakur200814@gmail.com"
            className={`${theme.textMuted} hover:${theme.textWhite} transition-colors text-sm inline-flex items-center gap-2 group`}
          >
            <Mail
              size={16}
              className="group-hover:scale-110 transition-transform"
            />
            armanthakur200814@gmail.com
          </a>
        </div>
        <div className="flex gap-3">
          <a
            href="https://github.com/kaihere14"
            className={`p-3 ${
              darkMode ? "bg-neutral-900" : "bg-neutral-100"
            } rounded-xl ${theme.textMuted} hover:${
              theme.textWhite
            } hover:${
              darkMode ? "bg-neutral-800" : "bg-neutral-200"
            } hover:scale-110 transition-all duration-300 border ${
              theme.cardBorder
            } hover:${theme.cardHoverBorder}`}
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/arman-thakur14/"
            className={`p-3 ${
              darkMode ? "bg-neutral-900" : "bg-neutral-100"
            } rounded-xl ${theme.textMuted} hover:text-blue-400 hover:${
              darkMode ? "bg-neutral-800" : "bg-neutral-200"
            } hover:scale-110 transition-all duration-300 border ${
              theme.cardBorder
            } hover:border-blue-900/50`}
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:armanthakur200814@gmail.com"
            className={`p-3 ${
              darkMode ? "bg-neutral-900" : "bg-neutral-100"
            } rounded-xl ${theme.textMuted} hover:text-purple-400 hover:${
              darkMode ? "bg-neutral-800" : "bg-neutral-200"
            } hover:scale-110 transition-all duration-300 border ${
              theme.cardBorder
            } hover:border-purple-900/50`}
          >
            <Mail size={22} />
          </a>
        </div>
      </div>
      <div className={`text-center pt-8 border-t ${theme.hr}`}>
        <p className={`${theme.footerText} text-xs`}>
          © 2025 Crafted with <span className="text-red-500">♥</span> by
          Arman Thakur.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

