import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Cpu,
  Globe,
  Terminal,
  ChevronRight,
  Award,
  BookOpen,
  Star,
  GitBranch,
  MessageSquare,
  CloudLightning,
  Zap,
  MapPin,
  Music,
  Clock,
  LayoutTemplate,
  Coffee,
  ArrowUpRight,
  Trophy,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Layers,
} from "lucide-react";

const Portfolio = () => {
  const [time, setTime] = useState(new Date());
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredProject, setHoveredProject] = useState(null);
  const [hoveredTech, setHoveredTech] = useState(null);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const darkModeClasses = {
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

  const lightModeClasses = {
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

  const theme = darkMode ? darkModeClasses : lightModeClasses;

  // UPDATED TECH STACK: All tools included, icons only
  const techStack = [
    {
      name: "React",
      icon: "https://skillicons.dev/icons?i=react",
      desc: "UI Library",
    },
    {
      name: "Next.js",
      icon: "https://skillicons.dev/icons?i=next",
      desc: "Framework",
    },
    {
      name: "Node.js",
      icon: "https://skillicons.dev/icons?i=nodejs",
      desc: "Runtime",
    },
    {
      name: "Express.js",
      icon: "https://skillicons.dev/icons?i=express",
      desc: "Backend",
    },
    {
      name: "MongoDB",
      icon: "https://skillicons.dev/icons?i=mongodb",
      desc: "Database",
    },
    {
      name: "Redis",
      icon: "https://skillicons.dev/icons?i=redis",
      desc: "Caching",
    },
    {
      name: "Socket.io",
      icon: "https://cdn.simpleicons.org/socketdotio/white",
      desc: "Real-time",
    },
    {
      name: "Tailwind",
      icon: "https://skillicons.dev/icons?i=tailwind",
      desc: "Styling",
    },
    {
      name: "Vercel",
      icon: "https://skillicons.dev/icons?i=vercel",
      desc: "Deployment",
    },
    {
      name: "Nginx",
      icon: "https://skillicons.dev/icons?i=nginx",
      desc: "Web Server",
    },
    {
      name: "Postman",
      icon: "https://skillicons.dev/icons?i=postman",
      desc: "API Testing",
    },
    {
      name: "Git",
      icon: "https://skillicons.dev/icons?i=git",
      desc: "Version Control",
    },
    {
      name: "GSAP",
      icon: "https://cdn.simpleicons.org/greensock/white",
      desc: "Animations",
    },
  ];

  const experiences = [
    {
      role: "Full-Stack Developer",
      company: "Personal Projects & Freelance",
      period: "2024 - Present",
      highlights: [
        "Built and deployed 5+ production-ready applications with 99.9% uptime",
        "Implemented secure authentication systems and payment integrations",
        "Optimized database queries reducing API response time by 60%",
        "Architected scalable microservices handling 10k+ concurrent users",
      ],
    },
  ];

  // =====================
  // UPDATED REAL STATS
  // =====================
  const stats = [
    {
      label: "Projects Shipped",
      value: "8+",
      icon: Layers,
      color: "text-purple-400",
    },
    {
      label: "GitHub Commits",
      value: "800+",
      icon: GitBranch,
      color: "text-green-400",
    },
    {
      label: "Technologies",
      value: "12+",
      icon: Cpu,
      color: "text-blue-400",
    },
    {
      label: "Lines of Code",
      value: "15k+",
      icon: Code,
      color: "text-yellow-400",
    },
  ];

  // =====================
  // UPDATED REAL PROJECT METRICS
  // =====================
  const detailedProjects = [
    {
      id: 1,
      name: "TitleForge AI",
      tagline: "AI-Powered YouTube Title Optimizer",
      description:
        "Production-grade SaaS platform leveraging Google's Gemini AI to generate optimized YouTube titles. Features a complete payment system with Razorpay integration, tiered plans, Redis caching, and secure JWT-based authentication.",
      icon: Globe,
      color: "purple",
      gradient: "from-purple-500/10 to-purple-600/10",
      status: "Live",
      date: "Oct 2025",
      link: "#",
      metrics: [
        { label: "Active Users", value: "10+" },
        { label: "Titles Generated", value: "150+" },
        { label: "Response Time", value: "~300ms" },
      ],
      tech: [
        "React",
        "Node.js",
        "Gemini AI",
        "Perplexity AI",
        "Redis",
        "Razorpay",
        "JWT",
      ],
      features: [
        "AI-powered title generation with context analysis",
        "Tiered subscription system (Free, Pro)",
        "Redis rate-limiting for API protection",
        "Secure payment processing with Razorpay",
        "Real-time analytics dashboard",
      ],
    },

    {
      id: 2,
      name: "ResolveIQ",
      tagline: "Intelligent CRM & Support System",
      description:
        "Smart complaint management system with technician assignment, email notifications, and real-time status updates.",
      icon: Database,
      color: "blue",
      gradient: "from-blue-500/10 to-blue-600/10",
      status: "Live",
      date: "Sep 2025",
      link: "#",
      metrics: [
        { label: "Tickets Resolved", value: "50+" },
        { label: "Response Time Improvement", value: "30%" },
        { label: "Test Rating", value: "4.6/5" },
      ],
      tech: ["MERN", "Socket.io", "Resend", "GSAP", "JWT", "MongoDB"],
      features: [
        "Smart ticket routing with priority queues",
        "Email updates with Resend API",
        "Role-based dashboards",
        "Real-time updates with Socket.io",
        "Analytics and reporting tools",
      ],
    },

    {
      id: 3,
      name: "ChatX",
      tagline: "Real-Time Messaging Platform",
      description:
        "A full real-time messaging app with typing indicators, read receipts, image sharing, and smooth socket updates.",
      icon: MessageSquare,
      color: "emerald",
      gradient: "from-emerald-500/10 to-emerald-600/10",
      status: "Beta",
      date: "Aug 2025",
      link: "#",
      metrics: [
        { label: "Messages Sent", value: "1k+" },
        { label: "Latency", value: "~150ms" },
        { label: "Test Users", value: "10+" },
      ],
      tech: ["React", "Socket.io", "Node.js", "MongoDB", "Cloudinary"],
      features: [
        "Real-time messaging with Socket.io",
        "File and image sharing",
        "Typing indicators and read receipts",
        "Group chats",
        "Searchable message history",
      ],
    },

    {
      id: 4,
      name: "Chatify AI",
      tagline: "Conversational AI Assistant",
      description:
        "A sleek conversational AI powered by Gemini API with markdown support, conversation history, and clean UI.",
      icon: Sparkles,
      color: "yellow",
      gradient: "from-yellow-500/10 to-orange-500/10",
      status: "Active",
      date: "Jul 2025",
      link: "#",
      metrics: [
        { label: "Conversations", value: "100+" },
        { label: "Avg Session", value: "4–5m" },
        { label: "Powered By", value: "Gemini API" },
      ],
      tech: ["React", "Gemini API", "Express", "JWT", "Markdown"],
      features: [
        "Google Gemini API integration",
        "Markdown + code syntax highlighting",
        "Conversation history storage",
        "Context-aware responses",
        "Secure user authentication",
      ],
    },
  ];

  return (
    <div
      className={`min-h-screen ${theme.mainBg} ${theme.text} font-sans ${theme.selection} pb-32 overflow-x-hidden transition-colors duration-300`}
    >
      {/* Light/Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`fixed top-6 right-6 z-50 p-2 rounded-full border ${
          theme.cardBorder
        } ${
          darkMode ? "bg-neutral-900/80" : "bg-white/80"
        } backdrop-blur-sm hover:${
          darkMode ? "bg-neutral-800" : "bg-neutral-200"
        } text-yellow-400 shadow-lg transition-all duration-300`}
        aria-label="Toggle light/dark mode"
      >
        {darkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.93l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
            />
          </svg>
        )}
      </button>

      {/* Gradient Cursor Effect */}
      <div
        className={`fixed w-96 h-96 rounded-full pointer-events-none z-50 opacity-20 blur-3xl transition-all duration-500 ease-out ${
          darkMode ? "opacity-20" : "opacity-0"
        }`}
        style={{
          background:
            "radial-gradient(circle, rgba(251,146,60,0.15) 0%, transparent 70%)",
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Top Pattern */}
      <div
        className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: theme.pattern,
          backgroundSize: "24px 24px",
        }}
      ></div>

      <main className="max-w-3xl mx-auto px-6 pt-16 relative z-10 space-y-16">
        {/* ABOUT ME SECTION */}

        {/* HEADER / HERO */}
        <header className="space-y-8">
          <div className="flex items-start justify-between">
            <div className="space-y-3">
              <div
                className={`h-16 w-16 ${theme.cardBg} rounded-2xl border ${theme.cardBorder} mb-6 flex items-center justify-center overflow-hidden relative group cursor-pointer`}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
                <img
                  src="https://res.cloudinary.com/dw87upoot/image/upload/v1763497871/Gemini_Generated_Image_2_Background_Removed_tkozqp.png"
                  alt="Logo"
                  className="w-16 h-16 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h1
                className={`text-5xl font-bold tracking-tight bg-gradient-to-r ${theme.gradientText} bg-clip-text text-transparent`}
              >
                Arman Thakur
              </h1>
              <p
                className={`text-lg ${theme.textMuted} max-w-lg leading-relaxed`}
              >
                Full-Stack Developer building{" "}
                <span className={`${theme.textWhite} font-medium`}>
                  scalable SaaS
                </span>{" "}
                and{" "}
                <span className={`${theme.textWhite} font-medium`}>
                  AI-powered applications
                </span>
                . Obsessed with{" "}
                <span className="text-orange-400">performance</span>,{" "}
                <span className="text-blue-400">clean code</span>, and{" "}
                <span className="text-green-400">seamless UX</span>.
              </p>
            </div>
          </div>

          {/* STATS ROW */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`${theme.cardBg} border ${theme.cardBorder} rounded-xl p-4 hover:${theme.cardHoverBg} hover:${theme.cardHoverBorder} transition-all duration-300 group cursor-default`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <stat.icon
                  size={18}
                  className={`${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}
                />
                <div
                  className={`text-2xl font-bold ${theme.textWhite} mb-1 group-hover:text-orange-400 transition-colors`}
                >
                  {stat.value}
                </div>
                <div className={`text-xs ${theme.textSubtle}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* STATUS WIDGETS (Bento Row) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {/* Location */}
            <div
              className={`col-span-1 ${theme.bentoBg} border ${theme.cardBorder} rounded-xl p-4 flex flex-col justify-between hover:${theme.cardHoverBorder} hover:${theme.bentoHoverBg} transition-all duration-300 group`}
            >
              <MapPin
                size={18}
                className={`${theme.textSubtle} group-hover:text-orange-400 transition-colors`}
              />
              <span
                className={`text-sm font-medium ${theme.bentoText} group-hover:${theme.textWhite} transition-colors`}
              >
                Himachal, India
              </span>
            </div>

            {/* Time */}
            <div
              className={`col-span-1 ${theme.bentoBg} border ${theme.cardBorder} rounded-xl p-4 flex flex-col justify-between hover:${theme.cardHoverBorder} hover:${theme.bentoHoverBg} transition-all duration-300 group`}
            >
              <Clock
                size={18}
                className={`${theme.textSubtle} group-hover:text-blue-400 transition-colors`}
              />
              <span
                className={`text-sm font-medium ${theme.bentoText} group-hover:${theme.textWhite} transition-colors font-mono`}
              >
                {time.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>

            {/* Status / Activity */}
            <div
              className={`col-span-2 ${theme.bentoBg} border ${theme.cardBorder} rounded-xl p-4 flex items-center justify-between gap-4 hover:border-green-900/50 hover:${theme.bentoHoverBg} transition-all duration-300 group cursor-default`}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute -inset-1 bg-green-500/20 rounded-full animate-pulse"></div>
                  <div className="h-2 w-2 bg-green-500 rounded-full relative z-10 group-hover:scale-125 transition-transform"></div>
                </div>
                <div className="flex flex-col">
                  <span
                    className={`text-xs ${theme.textSubtle} font-medium uppercase tracking-wider`}
                  >
                    Current Focus
                  </span>
                  <span
                    className={`text-sm font-medium ${theme.textWhite} group-hover:text-green-400 transition-colors`}
                  >
                    Building NovaDrive
                  </span>
                </div>
              </div>
              <Code
                size={18}
                className="text-neutral-600 group-hover:text-green-500 transition-colors"
              />
            </div>
          </div>
        </header>

        <hr className={theme.hr} />

        {/* EXPERIENCE SECTION */}
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
                      className="text-orange-400 mt-0.5 flex-shrink-0"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <hr className={theme.hr} />

        {/* FEATURED PROJECTS SECTION */}
        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <h2
              className={`text-xl font-bold ${theme.textWhite} flex items-center gap-2`}
            >
              <Star size={20} className="text-yellow-500 fill-yellow-500" />{" "}
              Featured Projects
            </h2>
            <a
              href="https://github.com/kaihere14"
              className={`text-xs ${theme.textSubtle} hover:${theme.textWhite} transition-colors flex items-center gap-1 group`}
            >
              View All on GitHub
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </div>

          <div className="space-y-6">
            {detailedProjects.map((project, idx) => (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`group ${
                  darkMode ? "bg-neutral-900/30" : "bg-neutral-50/30"
                } border ${theme.cardBorder} rounded-2xl p-6 hover:${
                  darkMode ? "bg-neutral-900/50" : "bg-neutral-50/50"
                } hover:${
                  theme.cardHoverBorder
                } transition-all duration-300 cursor-pointer`}
              >
                {/* Project Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div
                      className={`h-12 w-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center border border-${project.color}-500/20 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <project.icon
                        size={24}
                        className={`text-${project.color}-400`}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3
                          className={`text-lg font-bold ${theme.textWhite} group-hover:text-${project.color}-400 transition-colors`}
                        >
                          {project.name}
                        </h3>
                        <ExternalLink
                          size={14}
                          className={`${theme.textSubtle} opacity-0 group-hover:opacity-100 transition-opacity`}
                        />
                      </div>
                      <p className={`text-xs ${theme.textSubtle} mb-2`}>
                        {project.tagline} • {project.date}
                      </p>
                      <p
                        className={`text-sm ${theme.textMuted} leading-relaxed`}
                      >
                        {project.description}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`px-2 py-1 bg-green-900/20 border border-green-900/30 text-green-400 text-[10px] font-bold uppercase tracking-wider rounded whitespace-nowrap ml-4`}
                  >
                    {project.status}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {project.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className={`${
                        darkMode ? "bg-neutral-900/50" : "bg-neutral-100/50"
                      } rounded-lg p-3 border ${theme.cardBorder} hover:${
                        theme.cardHoverBorder
                      } transition-colors`}
                    >
                      <div className={`text-lg font-bold ${theme.textWhite}`}>
                        {metric.value}
                      </div>
                      <div className={`text-xs ${theme.textSubtle}`}>
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Expandable Features */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    hoveredProject === project.id
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className={`pt-4 border-t ${theme.hr} mb-4`}>
                    <h4
                      className={`text-xs font-bold ${theme.textMuted} uppercase tracking-wider mb-3`}
                    >
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li
                          key={i}
                          className={`text-sm ${theme.textSubtle} flex items-start gap-2`}
                        >
                          <div
                            className={`h-1.5 w-1.5 rounded-full bg-${project.color}-500 mt-1.5 flex-shrink-0`}
                          ></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`text-xs ${theme.textMuted} ${
                        darkMode ? "bg-neutral-900" : "bg-neutral-200"
                      } border ${
                        theme.cardBorder
                      } px-2.5 py-1 rounded-md hover:${
                        theme.cardHoverBorder
                      } hover:${theme.textWhite} transition-all`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className={theme.hr} />

        <section className="max-w-3xl mx-auto px-0 pt-2 pb-10">
          <h2 className={`text-lg ${theme.textMuted} font-semibold mb-2`}>
            About
          </h2>
          <h2 className={`text-3xl ${theme.textWhite} font-bold  mb-2`}>Me</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8  rounded-2xl p-6">
            <div className="shrink-0">
              <div className="w-55 h-55 rounded-2xl overflow-hidden border-4 border-yellow-400 bg-yellow-300 flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/dw87upoot/image/upload/v1763497871/Gemini_Generated_Image_2_Background_Removed_tkozqp.png"
                  alt="Arman Thakur Avatar"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h1
                className={`text-3xl md:text-4xl font-bold ${theme.textWhite} mb-2`}
              >
                Arman Thakur
              </h1>
              <p className={`${theme.textMuted} text-base mb-4`}>
                I'm a Full Stack web developer passionate about building
                scalable SaaS and AI-powered applications. I love solving
                real-world problems and crafting seamless user experiences.
              </p>
              <div>
                <span className={`${theme.textMuted} text-sm font-semibold`}>
                  Skills
                </span>
                <div className="flex flex-wrap gap-2 mt-2">
                  <img
                    src="https://skillicons.dev/icons?i=react"
                    alt="React"
                    className={`w-7 h-7 rounded p-1 ${
                      darkMode ? "bg-neutral-800" : "bg-neutral-200"
                    }`}
                  />
                  <img
                    src="https://skillicons.dev/icons?i=js"
                    alt="JavaScript"
                    className={`w-7 h-7 rounded p-1 ${
                      darkMode ? "bg-neutral-800" : "bg-neutral-200"
                    }`}
                  />
                  <img
                    src="https://skillicons.dev/icons?i=ts"
                    alt="TypeScript"
                    className={`w-7 h-7 rounded p-1 ${
                      darkMode ? "bg-neutral-800" : "bg-neutral-200"
                    }`}
                  />
                  <img
                    src="https://skillicons.dev/icons?i=mongodb"
                    alt="MongoDB"
                    className={`w-7 h-7 rounded p-1 ${
                      darkMode ? "bg-neutral-800" : "bg-neutral-200"
                    }`}
                  />
                  <img
                    src="https://skillicons.dev/icons?i=nodejs"
                    alt="Node.js"
                    className={`w-7 h-7 rounded p-1 ${
                      darkMode ? "bg-neutral-800" : "bg-neutral-200"
                    }`}
                  />
                  <img
                    src="https://skillicons.dev/icons?i=nextjs"
                    alt="Next.js"
                    className={`w-7 h-7 rounded p-1 ${
                      darkMode ? "bg-neutral-800" : "bg-neutral-200"
                    }`}
                  />
                  <img
                    src="https://skillicons.dev/icons?i=postgres"
                    alt="PostgreSQL"
                    className={`w-7 h-7 rounded p-1 ${
                      darkMode ? "bg-neutral-800" : "bg-neutral-200"
                    }`}
                  />
                  <img
                    src="https://skillicons.dev/icons?i=vercel"
                    alt="Vercel"
                    className={`w-7 h-7 rounded p-1 ${
                      darkMode ? "bg-neutral-800" : "bg-neutral-200"
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STACK / GEARS (UPDATED SECTION) */}
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

        <hr className={theme.hr} />

        {/* ACHIEVEMENTS */}
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

        <hr className={theme.hr} />

        {/* FOOTER */}
        <footer className="pt-12 pb-24 space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8">
            <div className="text-center md:text-left">
              <p
                className={`${theme.textWhite} font-bold text-2xl mb-2 bg-gradient-to-r ${theme.gradientText} bg-clip-text text-transparent`}
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
      </main>

      {/* FLOATING DOCK (Navigation) */}
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
            href="https://www.linkedin.com/in/arman-thakur14/"
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
    </div>
  );
};

export default Portfolio;
