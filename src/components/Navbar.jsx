import React, { useState, useEffect, useCallback } from "react";
import { Sun, Moon, Search, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ theme, darkMode, setDarkMode }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  // Handle keyboard shortcut (⌘K or Ctrl+K)
  const handleKeyDown = useCallback((e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      setSearchOpen((prev) => !prev);
    }
    if (e.key === "Escape") {
      setSearchOpen(false);
      setSearchQuery("");
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const navLinks = [
    { name: "Work", href: "/#work", section: "work" },
    { name: "Projects", href: "/#projects", section: "projects" },
    { name: "Blogs", href: "/blogs", section: "blogs" },
  ];

  const handleNavClick = (e, link) => {
    if (link.href.startsWith("/#")) {
      // If we're on the homepage, scroll to section
      if (location.pathname === "/") {
        e.preventDefault();
        const sectionId = link.href.replace("/#", "");
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
      // If not on homepage, the Link will navigate to /, then we scroll
    }
  };

  return (
    <>
      {/* Bottom Gradient Blur Overlay */}
      <div
        className="fixed bottom-0 left-0 right-0 z-40 h-[100px] pointer-events-none"
        style={{
          background: darkMode
            ? "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0.4) 60%, transparent 100%)"
            : "linear-gradient(to top, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 20%, rgba(255,255,255,0.4) 60%, transparent 100%)",
          backdropFilter: "blur(1px)",
          WebkitBackdropFilter: "blur(16px)",
          maskImage:
            "linear-gradient(to top, black 0%, black 20%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to top, black 0%, black 20%, transparent 100%)",
        }}
      />
      {/* Main Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        {/* Gradient blur background - high blur at top, fades to less at bottom */}
        <div
          className="absolute inset-x-0 top-0 h-17 pointer-events-none"
          style={{
            backdropFilter: "blur(10px)",
          }}
        />

        {/* Navbar Content */}
        <div className="relative max-w-3xl mx-auto px-6 pt-2">
          <div className="flex items-end justify-between">
            {/* Left: Avatar + Nav Links */}
            <div className="flex items-end gap-3">
              {/* Avatar - light blue in light mode, yellow in dark mode */}
              <Link to="/" className="relative group">
                <div
                  className={`w-13 h-13 rounded-xl overflow-hidden transition-transform duration-300 group-hover:scale-105 ${
                    darkMode ? "bg-amber-300" : "bg-sky-200"
                  }`}
                >
                  <img
                    src="https://res.cloudinary.com/dw87upoot/image/upload/v1763497871/Gemini_Generated_Image_2_Background_Removed_tkozqp.png"
                    alt="Arman Thakur"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>

              {/* Navigation Links - aligned to bottom */}
              <div className="flex items-center gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href.startsWith("/#") ? "/" : link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`text-base font-medium transition-all duration-200 ${
                      darkMode
                        ? "text-neutral-300 hover:text-white"
                        : "text-neutral-700 hover:text-black"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right: Search + Theme Toggle */}
            <div className="flex items-center gap-2 sm:mb-3">
              {/* Search Button */}
              <button
                onClick={() => setSearchOpen(true)}
                className={`flex items-center gap-2 p-3 sm:px-3 sm:py-2 text-sm rounded-lg transition-all duration-200 ${
                  darkMode
                    ? "bg-zinc-950 text-white/80 hover:text-white"
                    : "bg-neutral-100 text-neutral-500 hover:text-black"
                }`}
                style={{
                  boxShadow: darkMode
                    ? "inset 1px 1px 2px rgba(255,255,255,0.1)"
                    : "inset 2px 2px 5px rgba(0,0,0,0.08), inset -2px -2px 5px rgba(255,255,255,0.9)",
                }}
                aria-label="Search"
              >
                <Search size={18} className="sm:hidden" />
                <span className="hidden sm:inline">Search</span>
                <kbd
                  className={`hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-medium rounded ${
                    darkMode
                      ? "bg-zinc-900 text-white/80"
                      : "bg-neutral-200/80 text-neutral-500"
                  }`}
                >
                  ⌘K
                </kbd>
              </button>

              {/* Theme Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-3 sm:p-[10px] rounded-lg transition-all duration-200 ${
                  darkMode
                    ? "bg-zinc-950 text-white/80 hover:text-yellow-400"
                    : "bg-neutral-100 text-neutral-500 hover:text-amber-500"
                }`}
                style={{
                  boxShadow: darkMode
                    ? "inset 1px 1px 2px rgba(255,255,255,0.1)"
                    : "inset 2px 2px 5px rgba(0,0,0,0.08), inset -2px -2px 5px rgba(255,255,255,0.9)",
                }}
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Search Modal Overlay */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center pt-24"
          onClick={() => {
            setSearchOpen(false);
            setSearchQuery("");
          }}
        >
          {/* Backdrop */}
          <div
            className={`absolute inset-0 ${
              darkMode ? "bg-black/60" : "bg-black/30"
            } backdrop-blur-sm`}
          />

          {/* Search Modal */}
          <div
            className={`relative w-full max-w-xl mx-4 ${
              darkMode ? "bg-neutral-900" : "bg-white"
            } border ${
              darkMode ? "border-neutral-800" : "border-neutral-200"
            } rounded-2xl shadow-2xl overflow-hidden`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input */}
            <div className="flex items-center gap-3 p-4">
              <Search
                size={20}
                className={darkMode ? "text-neutral-500" : "text-neutral-400"}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search pages, projects, blog posts..."
                autoFocus
                className={`flex-1 bg-transparent text-lg outline-none placeholder:text-neutral-500 ${
                  darkMode ? "text-white" : "text-black"
                }`}
              />
              <button
                onClick={() => {
                  setSearchOpen(false);
                  setSearchQuery("");
                }}
                className={`p-1.5 rounded-lg transition-colors ${
                  darkMode
                    ? "hover:bg-neutral-800 text-neutral-500"
                    : "hover:bg-neutral-100 text-neutral-400"
                }`}
              >
                <X size={18} />
              </button>
            </div>

            {/* Search Results Placeholder */}
            <div
              className={`border-t ${
                darkMode ? "border-neutral-800" : "border-neutral-200"
              } p-4`}
            >
              {searchQuery ? (
                <div className="space-y-2">
                  <p
                    className={`text-sm ${
                      darkMode ? "text-neutral-500" : "text-neutral-400"
                    }`}
                  >
                    Searching for "{searchQuery}"...
                  </p>
                  {/* You can add actual search results here */}
                </div>
              ) : (
                <div className="space-y-3">
                  <p
                    className={`text-xs font-medium uppercase tracking-wider ${
                      darkMode ? "text-neutral-600" : "text-neutral-400"
                    }`}
                  >
                    Quick Links
                  </p>
                  <div className="space-y-1">
                    {["Home", "Projects", "Blogs", "About"].map((item) => (
                      <button
                        key={item}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                          darkMode
                            ? "hover:bg-neutral-800 text-neutral-300"
                            : "hover:bg-neutral-100 text-neutral-600"
                        }`}
                        onClick={() => {
                          setSearchOpen(false);
                          setSearchQuery("");
                          // Navigate to section
                          const sectionId = item.toLowerCase();
                          if (sectionId === "home") {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          } else {
                            const element = document.getElementById(sectionId);
                            if (element) {
                              element.scrollIntoView({ behavior: "smooth" });
                            }
                          }
                        }}
                      >
                        <span className="text-sm font-medium">{item}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div
              className={`flex items-center justify-between px-4 py-2 border-t text-xs ${
                darkMode
                  ? "border-neutral-800 text-neutral-600"
                  : "border-neutral-200 text-neutral-400"
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <kbd
                    className={`px-1.5 py-0.5 rounded ${
                      darkMode ? "bg-neutral-800" : "bg-neutral-100"
                    }`}
                  >
                    ↵
                  </kbd>
                  to select
                </span>
                <span className="flex items-center gap-1">
                  <kbd
                    className={`px-1.5 py-0.5 rounded ${
                      darkMode ? "bg-neutral-800" : "bg-neutral-100"
                    }`}
                  >
                    esc
                  </kbd>
                  to close
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
