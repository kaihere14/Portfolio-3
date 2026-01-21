import React, { use, useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { useTime } from "../hooks/useTime";
import { useSpotify } from "../hooks/useSpotify";
import { checkStatus } from "../hooks/useDiscord";

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
import Navbar from "../components/Navbar";
import useGithubCommits from "../hooks/useGithubCommits";
import GitContributionMap from "../components/GitContributionMap";

const Portfolio = () => {
  const { gitValue } = useGithubCommits();
  const { darkMode, setDarkMode, theme } = useTheme();
  const time = useTime();
  const { spotify, spotifyLoaded } = useSpotify();
  const [hoveredProject, setHoveredProject] = useState(null);
  const [hoveredTech, setHoveredTech] = useState(null);
  const { discord } = checkStatus();

  return (
    <div
      className={`min-h-screen ${theme.mainBg} ${theme.text} font-sans ${theme.selection} pb-32 overflow-x-hidden transition-colors duration-300`}
    >
      <Navbar theme={theme} darkMode={darkMode} setDarkMode={setDarkMode} />
      <CursorEffect darkMode={darkMode} />
      <BackgroundPattern theme={theme} />

      <main className="max-w-3xl mx-auto px-6 pt-24 relative z-10 space-y-16">
        <Header
          theme={theme}
          darkMode={darkMode}
          time={time}
          status={discord}
          gitValue={gitValue}
        />
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

        <section id="work">
          <ExperienceSection theme={theme} darkMode={darkMode} />
        </section>

        <hr className={theme.hr} />

        <section id="projects">
          <ProjectsSection
            theme={theme}
            darkMode={darkMode}
            hoveredProject={hoveredProject}
            setHoveredProject={setHoveredProject}
          />
        </section>

        <hr className={theme.hr} />

        <section id="about">
          <AboutSection theme={theme} darkMode={darkMode} />
        </section>

        <hr className={theme.hr} />

        <GitContributionMap theme={theme} darkMode={darkMode} />

        <hr className={theme.hr} />

        <AchievementsSection theme={theme} darkMode={darkMode} />

        <hr className={theme.hr} />

        <Footer theme={theme} darkMode={darkMode} />
      </main>
    </div>
  );
};

export default Portfolio;
