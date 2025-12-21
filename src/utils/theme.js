export const darkModeClasses = {
  mainBg: "bg-black",
  text: "text-neutral-200",
  selection: "selection:bg-white/20 selection:text-white",
  pattern: "radial-gradient(#333 1px, transparent 1px)",
  cardBg: "bg-neutral-900/40",
  cardBorder: "border-neutral-800",
  cardHoverBg: "bg-neutral-900/60",
  cardHoverBorder: "border-neutral-700",
  textWhite: "text-white",
  textMuted: "text-neutral-400",
  textSubtle: "text-neutral-500",
  gradientText: "from-white to-neutral-400",
  bentoBg: "bg-neutral-900/50",
  bentoHoverBg: "bg-neutral-900/70",
  bentoText: "text-neutral-300",
  hr: "border-neutral-900",
  tooltipBg: "bg-neutral-800",
  tooltipBorder: "border-neutral-700",
  footerText: "text-neutral-700",
  dockBg: "bg-neutral-900/90",
  dockBorder: "border-neutral-800",
  dockHoverBg: "hover:bg-neutral-800",
};

export const lightModeClasses = {
  mainBg: "bg-neutral-100",
  text: "text-neutral-800",
  selection: "selection:bg-black/10 selection:text-black",
  pattern: "radial-gradient(#ccc 1px, transparent 1px)",
  cardBg: "bg-white/40",
  cardBorder: "border-neutral-200",
  cardHoverBg: "bg-white/60",
  cardHoverBorder: "border-neutral-300",
  textWhite: "text-black",
  textMuted: "text-neutral-600",
  textSubtle: "text-neutral-500",
  gradientText: "from-black to-neutral-600",
  bentoBg: "bg-white/50",
  bentoHoverBg: "bg-white/70",
  bentoText: "text-neutral-700",
  hr: "border-neutral-200",
  tooltipBg: "bg-neutral-100",
  tooltipBorder: "border-neutral-300",
  footerText: "text-neutral-400",
  dockBg: "bg-white/90",
  dockBorder: "border-neutral-200",
  dockHoverBg: "hover:bg-neutral-200",
};

export const getTheme = (darkMode) => {
  return darkMode ? darkModeClasses : lightModeClasses;
};

