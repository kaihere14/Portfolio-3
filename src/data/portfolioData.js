import {
  Code,
  Database,
  Cpu,
  Globe,
  GitBranch,
  MessageSquare,
  Sparkles,
  Layers,
  Folder,
} from "lucide-react";





export const techStack = [
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

export const experiences = [
  {
    role: "Full-Stack Developer",
    company: "Personal Projects & Freelance",
    period: "2025 - Present",
    highlights: [
      "Built and deployed 8+ production-ready applications with 99.9% uptime",
      "Implemented secure authentication systems and payment integrations",
      "Optimized database queries reducing API response time by 60%",
      "Architected scalable microservices handling 10k+ concurrent users",
    ],
  },
];

export const stats = [
  {
    label: "Projects Shipped",
    value: "8+",
    icon: Layers,
    color: "text-purple-400",
  },
  {
    label: "GitHub Commits",
    value:  "900+",
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

export const detailedProjects = [
  {
    id: 1,
    name: "NovaDrive AI",
    tagline: "AI-Powered Personal Cloud Platform",
    description:
      "Production-grade personal cloud storage platform with AI-assisted organization, secure file management, and scalable backend architecture. Built with chunked uploads, background workers, Redis-backed queues, and AI-powered file understanding to deliver fast, reliable, and intelligent storage.",
    icon: Folder,
    color: "blue",
    gradient: "from-blue-500/10 to-blue-600/10",
    status: "Live",
    date: "Dec 2025",
    link: "https://www.novadrive.space/",
    metrics: [
      { label: "Files Stored", value: "50+" },
      { label: "AI Operations", value: "300+" },
      { label: "Background Jobs", value: "Queued" },
    ],
    tech: [
      "React",
      "Node.js",
      "TypeScript",
      "BullMQ",
      "Redis",
      "MongoDB",
      "AI Vision & NLP",
      "JWT (Access + Refresh)",
      "Cloud Object Storage",
      "oAuth2",
    ],
    features: [
      "Chunked file uploads with fault tolerance and resume support",
      "Background workers for file merging and AI processing",
      "AI-powered auto-tagging, summaries, and smart search",
      "Secure storage architecture with metadata indexing",
      "Real-time upload progress and status tracking",
      "Modern dashboard with folder hierarchy and previews",
      "Centralized logging and observability-ready design",
    ],
  },
  {
    id: 2,
    name: "TitleForge AI",
    tagline: "AI-Powered YouTube Title Optimizer",
    description:
      "Production-grade SaaS platform leveraging Google's Gemini AI to generate optimized YouTube titles. Features a complete payment system with Razorpay integration, tiered plans, Redis caching, and secure JWT-based authentication.",
    icon: Globe,
    color: "purple",
    gradient: "from-purple-500/10 to-purple-600/10",
    status: "Live",
    date: "Oct 2025",
    link: "https://www.titleforge.me/",
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
    id: 3,
    name: "ResolveIQ",
    tagline: "Intelligent CRM & Support System",
    description:
      "Smart complaint management system with technician assignment, email notifications, and real-time status updates.",
    icon: Database,
    color: "blue",
    gradient: "from-blue-500/10 to-blue-600/10",
    status: "Live",
    date: "Sep 2025",
    link: "https://resolve-iq-cqza.vercel.app/",
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
    id: 4,
    name: "ChatX",
    tagline: "Real-Time Messaging Platform",
    description:
      "A full real-time messaging app with typing indicators, read receipts, image sharing, and smooth socket updates.",
    icon: MessageSquare,
    color: "emerald",
    gradient: "from-emerald-500/10 to-emerald-600/10",
    status: "Beta",
    date: "Aug 2025",
    link: "https://chatx-lcy3i.sevalla.app/login",
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
    id: 5,
    name: "Chatify AI",
    tagline: "Conversational AI Assistant",
    description:
      "A sleek conversational AI powered by Gemini API with markdown support, conversation history, and clean UI.",
    icon: Sparkles,
    color: "yellow",
    gradient: "from-yellow-500/10 to-orange-500/10",
    status: "Active",
    date: "Jul 2025",
    link: "https://chatify-ai.vercel.app/",
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
