import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  Sun,
  Moon,
  Search,
  X,
  FileText,
  Home,
  Briefcase,
  FolderOpen,
  User,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ theme, darkMode, setDarkMode }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  // Searchable items
  const searchItems = [
    { name: "Home", type: "page", href: "/", icon: Home },
    {
      name: "Work Experience",
      type: "section",
      href: "/#work",
      icon: Briefcase,
    },
    { name: "Projects", type: "section", href: "/#projects", icon: FolderOpen },
    { name: "About", type: "section", href: "/#about", icon: User },
    { name: "All Blogs", type: "page", href: "/blogs", icon: FileText },
    {
      name: "How DNS Resolution Works",
      type: "blog",
      href: "/blogs/how-dns-resolution-works",
      icon: FileText,
    },
    {
      name: "What is cURL and How to Use It",
      type: "blog",
      href: "/blogs/what-is-curl",
      icon: FileText,
    },
  ];

  // Filter items based on search query
  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return searchItems.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.type.toLowerCase().includes(query),
    );
  }, [searchQuery]);

  // Handle navigation
  const handleNavigate = (item) => {
    setSearchOpen(false);
    setSearchQuery("");

    if (item.href.startsWith("/#")) {
      const sectionId = item.href.replace("/#", "");
      if (location.pathname === "/") {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    } else {
      navigate(item.href);
    }
  };

  // Handle keyboard shortcut (⌘K or Ctrl+K)
  const handleKeyDown = useCallback(
    (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setSearchOpen(false);
        setSearchQuery("");
      }
      if (e.key === "Enter" && searchOpen && filteredItems.length > 0) {
        handleNavigate(filteredItems[0]);
      }
    },
    [searchOpen, filteredItems],
  );

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
      if (location.pathname === "/") {
        e.preventDefault();
        const sectionId = link.href.replace("/#", "");
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
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
      <nav className="fixed top-0 left-0 right-0 z-50 pl-1">
        <div
          className="absolute inset-x-0 top-0 h-18 pointer-events-none"
          style={{ backdropFilter: "blur(7px)" }}
        />

        <div className="relative max-w-3xl mx-auto px-6 pt-4">
          <div className="flex items-end justify-between">
            {/* Left: Avatar + Nav Links */}
            <div className="flex items-end gap-3">
              <Link to="/" className="relative group">
                <div
                  className={`w-13 h-13 rounded-xl overflow-hidden transition-transform duration-300 group-hover:scale-105 ${
                    darkMode ? "bg-amber-300" : "bg-sky-200"
                  }`}
                >
                  <img
                    src="https://res.cloudinary.com/dw87upoot/image/upload/v1763497871/Gemini_Generated_Image_2_Background_Removed_tkozqp.png"
                    alt="Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>

              <nav className="flex items-center gap-6 pb-1.5">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`text-sm font-medium transition-colors duration-200 ${
                      darkMode
                        ? "text-white hover:text-white"
                        : "text-black hover:text-black"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Right: Search + Theme Toggle */}
            <div className="flex items-center gap-2 sm:mb-3">
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

      {/* Search Modal */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center pt-24"
          onClick={() => {
            setSearchOpen(false);
            setSearchQuery("");
          }}
        >
          <div
            className={`absolute inset-0 ${darkMode ? "bg-black/60" : "bg-black/30"} backdrop-blur-sm`}
          />

          <div
            className={`relative w-full max-w-xl mx-4 ${
              darkMode ? "bg-neutral-900" : "bg-white"
            } border ${darkMode ? "border-neutral-800" : "border-neutral-200"} rounded-2xl shadow-2xl overflow-hidden`}
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

            {/* Search Results */}
            <div
              className={`border-t ${darkMode ? "border-neutral-800" : "border-neutral-200"} p-4 max-h-80 overflow-y-auto`}
            >
              {searchQuery ? (
                filteredItems.length > 0 ? (
                  <div className="space-y-1">
                    {filteredItems.map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <button
                          key={item.href}
                          onClick={() => handleNavigate(item)}
                          className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-colors ${
                            darkMode
                              ? "hover:bg-neutral-800 text-neutral-300"
                              : "hover:bg-neutral-100 text-neutral-600"
                          }`}
                        >
                          <IconComponent
                            size={18}
                            className={
                              darkMode ? "text-neutral-500" : "text-neutral-400"
                            }
                          />
                          <div className="flex-1">
                            <span className="text-sm font-medium block">
                              {item.name}
                            </span>
                            <span
                              className={`text-xs ${darkMode ? "text-neutral-500" : "text-neutral-400"}`}
                            >
                              {item.type}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <p
                    className={`text-sm text-center py-4 ${darkMode ? "text-neutral-500" : "text-neutral-400"}`}
                  >
                    No results found for "{searchQuery}"
                  </p>
                )
              ) : (
                <div className="space-y-3">
                  <p
                    className={`text-xs font-medium uppercase tracking-wider ${darkMode ? "text-neutral-600" : "text-neutral-400"}`}
                  >
                    Quick Links
                  </p>
                  <div className="space-y-1">
                    {searchItems.slice(0, 5).map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <button
                          key={item.href}
                          onClick={() => handleNavigate(item)}
                          className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                            darkMode
                              ? "hover:bg-neutral-800 text-neutral-300"
                              : "hover:bg-neutral-100 text-neutral-600"
                          }`}
                        >
                          <IconComponent
                            size={16}
                            className={
                              darkMode ? "text-neutral-500" : "text-neutral-400"
                            }
                          />
                          <span className="text-sm font-medium">
                            {item.name}
                          </span>
                        </button>
                      );
                    })}
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
                    className={`px-1.5 py-0.5 rounded ${darkMode ? "bg-neutral-800" : "bg-neutral-100"}`}
                  >
                    ↵
                  </kbd>
                  to select
                </span>
                <span className="flex items-center gap-1">
                  <kbd
                    className={`px-1.5 py-0.5 rounded ${darkMode ? "bg-neutral-800" : "bg-neutral-100"}`}
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
