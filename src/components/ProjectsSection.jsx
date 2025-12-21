import React from "react";
import { ArrowUpRight, Globe, Github } from "lucide-react";

// Helper function to get tech icon (socket icon adapts to mode)
const getTechIcon = (techName, isDarkMode = false) => {
  const tech = techName.toLowerCase();

  if (tech.includes("react")) {
    return (
      <span className="w-3 h-3 shrink-0 inline-flex">
        <svg viewBox="0 0 128 128" className="w-3 h-3">
          <g fill="#61DAFB">
            <circle cx="64" cy="64" r="11.4"></circle>
            <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
          </g>
        </svg>
      </span>
    );
  }

  if (tech.includes("node")) {
    return (
      <img
        src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
        alt="Node.js"
        className="w-3 h-3"
      />
    );
  }

  if (tech.includes("mongodb")) {
    return (
      <img
        src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
        alt="MongoDB"
        className="w-3 h-3"
      />
    );
  }

  if (tech.includes("express")) {
    return (
      <img
        src="https://skillicons.dev/icons?i=express"
        alt="Express"
        className="w-3 h-3"
      />
    );
  }

  if (tech.includes("socket")) {
    const socketColor = isDarkMode ? "white" : "000000";
    return (
      <img
        src={`https://cdn.simpleicons.org/socketdotio/${socketColor}`}
        alt="Socket.io"
        className="w-3 h-3"
      />
    );
  }

  if (tech.includes("gemini")) {
    return (
      <img
        src="https://www.vectorlogo.zone/logos/google/google-icon.svg"
        alt="Gemini"
        className="w-3 h-3"
      />
    );
  }

  if (tech.includes("cloudflare") || tech.includes("r2")) {
    return (
      <img
        src="https://cdn.simpleicons.org/cloudflare/F38020"
        alt="Cloudflare"
        className="w-3 h-3"
      />
    );
  }

  // Default: use skillicons.dev
  const iconName = tech.replace(/\s+/g, "").replace(".js", "").replace(".", "");
  return (
    <img
      src={`https://skillicons.dev/icons?i=${iconName}`}
      alt={techName}
      className="w-3 h-3"
    />
  );
};

const ProjectsSection = ({ theme, darkMode }) => {
  // Normalize theme tokens with light/dark fallbacks so this section follows the global ThemeToggle
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
  const projects = [
    {
      id: "nova-drive",
      name: "NovaDrive",
      tagline: "Cloud Storage Platform",
      description:
        "A comprehensive cloud storage solution with advanced file management and sharing capabilities",
      image:
        "https://res.cloudinary.com/duzmwp7ax/image/upload/v1766355746/nova_drive_wktbks.png",
      tech: ["React.js", "Node.js", "MongoDB", "Cloudflare R2"],
      status: "Building",
      link: "https://www.novadrive.space/",
      githubLink: "https://github.com/kaihere14/Nova_Drive",
    },
    {
      id: "title-forge",
      name: "TitleForge",
      tagline: "AI Content Generator",
      description:
        "AI-powered platform for generating engaging titles and content with advanced NLP capabilities",
      image:
        "https://res.cloudinary.com/duzmwp7ax/image/upload/v1766355747/title_forge_wjzod7.png",
      tech: ["React.js", "Node.js", "MongoDB", "Gemini"],
      status: "All Systems Operational",
      link: "https://www.titleforge.me/",
      githubLink: "https://github.com/kaihere14/Title-Forge",
    },
    {
      id: "chatx",
      name: "ChatX",
      tagline: "Real-time Chat Application",
      description:
        "Real-time messaging platform with end-to-end encryption, group chats, and media sharing",
      image:
        "https://res.cloudinary.com/duzmwp7ax/image/upload/v1766355747/chatx_imvxsd.png",
      tech: ["React", "Socket.io", "Express.js", "MongoDB"],
      status: "All Systems Operational",
      link: "https://chatx-lcy3i.sevalla.app/",
      githubLink: "https://github.com/kaihere14/ChatX",
    },
    {
      id: "resolve-iq",
      name: "ResolveIQ",
      tagline: "Smart Issue Tracker",
      description:
        "Intelligent issue tracking and resolution platform with AI-powered insights and analytics",
      image:
        "https://res.cloudinary.com/duzmwp7ax/image/upload/v1766355747/resolve_iq_huhjom.png",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
      status: "All Systems Operational",
      link: "https://resolve-iq-cqza.vercel.app/",
      githubLink: "https://github.com/kaihere14/ResolveIQ-",
    },
  ];

  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className={`text-sm ${palette.textSubtle} mb-1`}>Featured</p>
          <h2 className={`text-3xl font-bold ${palette.textPrimary}`}>
            Projects
          </h2>
        </div>
        <a
          href="https://github.com/kaihere14"
          className={`text-xs ${palette.textSubtle} hover:${palette.textWhite} transition-colors flex items-center gap-1 group`}
        >
          View All on GitHub
          <ArrowUpRight
            size={12}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </a>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`group relative ${palette.cardBg} border ${palette.cardBorder} rounded-2xl overflow-hidden hover:${palette.cardHoverBorder} hover:${palette.cardHoverBg} transition-all duration-300`}
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover scale-110 transform -rotate-2 group-hover:rotate-0 group-hover:scale-115 transition-all duration-500"
                style={{
                  transformOrigin: "center center",
                }}
              />
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Title & Icons */}
              <div className="flex items-start justify-between mb-3">
                <h3
                  className={`text-xl font-bold ${palette.textPrimary} transition-colors`}
                >
                  {project.name}
                </h3>
                <div className="flex items-center gap-2">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${palette.textSubtle} hover:${palette.textWhite} transition-colors`}
                    >
                      <Globe size={18} />
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${palette.textSubtle} hover:${palette.textWhite} transition-colors`}
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p
                className={`text-sm ${palette.textMuted} leading-relaxed mb-4`}
              >
                {project.description}
              </p>

              {/* Technologies Label */}
              <p
                className={`text-xs ${palette.textSubtle} uppercase tracking-wider font-semibold mb-2`}
              >
                Technologies
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className={`text-xs ${palette.textMuted} ${palette.chipBg} border ${palette.cardBorder} px-2.5 py-1 rounded-md inline-flex items-center gap-1.5`}
                  >
                    {getTechIcon(tech, darkMode)}
                    {tech}
                  </span>
                ))}
              </div>

              {/* Status Badge & View Details */}
              <div
                className={`flex items-center justify-between pt-4 border-t ${palette.hr}`}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`h-2 w-2 rounded-full ${
                      project.status === "All Systems Operational"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  ></div>
                  <span
                    className={`text-xs ${
                      project.status === "All Systems Operational"
                        ? darkMode
                          ? "text-green-400"
                          : "text-green-600"
                        : "text-red-500"
                    } font-medium`}
                  >
                    {project.status}
                  </span>
                </div>
                <a
                  href={project.link}
                  className={`text-xs ${palette.textSubtle} hover:${palette.textWhite} transition-colors flex items-center gap-1 group/link`}
                >
                  View Details
                  <ArrowUpRight
                    size={12}
                    className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
