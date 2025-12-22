import React, { use, useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { useTime } from "../hooks/useTime";
import { useMousePosition } from "../hooks/useMousePosition";
import { useSpotify } from "../hooks/useSpotify";
import { checkStatus } from "../hooks/useDiscord";
import ThemeToggle from "../components/ThemeToggle";
import CursorEffect from "../components/CursorEffect";
import BackgroundPattern from "../components/BackgroundPattern";
import Header from "../components/Header";
import SpotifyCard from "../components/SpotifyCard";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import AboutSection from "../components/AboutSection";
import TechStackSection from "../components/TechStackSection";
import AchievementsSection from "../components/AchievementsSection";
import Footer from "../components/Footer";
import FloatingDock from "../components/FloatingDock";



const Portfolio = () => {
  const { darkMode, setDarkMode, theme } = useTheme();
  const time = useTime();
  const mousePosition = useMousePosition();
  const { spotify, spotifyLoaded } = useSpotify();
  const [hoveredProject, setHoveredProject] = useState(null);
  const [hoveredTech, setHoveredTech] = useState(null);
  const { discord } = checkStatus();




  return (
    <div
      className={`min-h-screen ${theme.mainBg} ${theme.text} font-sans ${theme.selection} pb-32 overflow-x-hidden transition-colors duration-300`}
    >
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} theme={theme} />
      <CursorEffect mousePosition={mousePosition} darkMode={darkMode} />
      <BackgroundPattern theme={theme} />

      <main className="max-w-3xl mx-auto px-6 pt-16 relative z-10 space-y-16">
        <Header theme={theme} darkMode={darkMode} time={time} status={discord} />
        <SpotifyCard
          spotify={spotify}
          spotifyLoaded={spotifyLoaded}
          theme={theme}
          darkMode={darkMode}
          
        />

        <hr className={theme.hr} />

        <TechStackSection
          theme={theme}
          darkMode={darkMode}
          hoveredTech={hoveredTech}
          setHoveredTech={setHoveredTech}
        />

        <ExperienceSection theme={theme} darkMode={darkMode} />

        <hr className={theme.hr} />

        <ProjectsSection
          theme={theme}
          darkMode={darkMode}
          hoveredProject={hoveredProject}
          setHoveredProject={setHoveredProject}
        />

        <hr className={theme.hr} />

        <AboutSection theme={theme} darkMode={darkMode} />

        

        <hr className={theme.hr} />

        <AchievementsSection theme={theme} darkMode={darkMode} />

        <hr className={theme.hr} />

        <Footer theme={theme} darkMode={darkMode} />
      </main>

      <FloatingDock theme={theme} darkMode={darkMode} />
    </div>
  );
};

export default Portfolio;
