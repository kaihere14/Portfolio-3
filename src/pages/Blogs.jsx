import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { useMousePosition } from "../hooks/useMousePosition";
import Navbar from "../components/Navbar";
import CursorEffect from "../components/CursorEffect";
import BackgroundPattern from "../components/BackgroundPattern";

const Blogs = () => {
  const { darkMode, setDarkMode, theme } = useTheme();
  const mousePosition = useMousePosition();
  const [selectedTag, setSelectedTag] = useState(null);

  const posts = [
    {
      id: 1,
      title: "How DNS Resolution Works",
      description:
        "A deep dive into how DNS resolution works end-to-end, covering recursive resolvers, root servers, TLD servers, authoritative name servers, and practical usage of the dig command.",
      image:
        "https://media.geeksforgeeks.org/wp-content/uploads/20250423151312675710/DNS-SERVER.webp",
      slug: "how-dns-resolution-works",
      tags: ["networking", "systems", "dns"],
      author: "Arman",
      publishedAt: "2026-01-18",
      readTime: "7 min read",
    },
    {
      id: 2,
      title: "What is cURL and How to Use It",
      description:
        "A beginner-friendly guide to cURL - the command-line tool for communicating with servers, testing APIs, and debugging requests directly from your terminal.",
      image:
        "https://accountgram-production.sfo2.cdn.digitaloceanspaces.com/nubelaco_ghost/2022/12/TLC_Using_cURL_In_5_Actual_Scenarios_Using_cURL.png",
      slug: "what-is-curl",
      tags: ["api", "terminal", "development"],
      author: "Arman",
      publishedAt: "2026-01-18",
      readTime: "6 min read",
    },
  ];

  // Generate tags dynamically from posts
  const tags = useMemo(() => {
    const tagCounts = {};
    posts.forEach((post) => {
      post.tags?.forEach((tag) => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      });
    });
    return Object.entries(tagCounts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
  }, [posts]);

  // Filter posts based on selected tag
  const filteredPosts = useMemo(() => {
    if (!selectedTag) return posts;
    return posts.filter((post) => post.tags?.includes(selectedTag));
  }, [selectedTag, posts]);

  return (
    <div
      className={`min-h-screen ${theme.mainBg} ${theme.text} font-sans ${theme.selection} pb-32 overflow-x-hidden transition-colors duration-300`}
    >
      <Navbar theme={theme} darkMode={darkMode} setDarkMode={setDarkMode} />
      <CursorEffect mousePosition={mousePosition} darkMode={darkMode} />
      <BackgroundPattern theme={theme} />

      <main className="max-w-3xl mx-auto px-6 pt-32 relative z-10">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-5xl font-bold tracking-tight">Blogs</h1>
          <p
            className={`text-lg ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}
          >
            Thoughts, tutorials, and insights on engineering, and programming.
          </p>
          <div
            className={`h-px w-full max-w-sm mx-auto mt-8 ${darkMode ? "bg-neutral-800" : "bg-neutral-200"}`}
          />
        </div>

        {/* Popular Tags Section */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-6">Popular Tags</h2>
          <div className="flex flex-wrap gap-2">
            {/* All Tag */}
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-all cursor-pointer ${
                selectedTag === null
                  ? darkMode
                    ? "bg-white text-black border-white"
                    : "bg-neutral-900 text-white border-neutral-900"
                  : darkMode
                    ? "bg-neutral-900 border-neutral-800 text-neutral-300 hover:bg-neutral-800"
                    : "bg-white border-neutral-200 text-neutral-600 hover:bg-neutral-50"
              }`}
            >
              All ({posts.length})
            </button>

            {tags.map((tag) => (
              <button
                key={tag.name}
                onClick={() => setSelectedTag(tag.name)}
                className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-all cursor-pointer ${
                  selectedTag === tag.name
                    ? darkMode
                      ? "bg-white text-black border-white"
                      : "bg-neutral-900 text-white border-neutral-900"
                    : darkMode
                      ? "bg-neutral-900 border-neutral-800 text-neutral-300 hover:bg-neutral-800"
                      : "bg-white border-neutral-200 text-neutral-600 hover:bg-neutral-50"
                }`}
              >
                {tag.name} ({tag.count})
              </button>
            ))}
          </div>
        </div>

        {/* Latest Posts Section */}
        <div className="mb-16">
          <h2 className={`text-xl font-bold mb-8 flex items-end gap-2`}>
            {selectedTag ? `Posts tagged "${selectedTag}"` : "Latest Posts"}{" "}
            <span
              className={`text-sm font-normal ${darkMode ? "text-neutral-500" : "text-neutral-400"}`}
            >
              ({filteredPosts.length} post
              {filteredPosts.length !== 1 ? "s" : ""})
            </span>
          </h2>

          {filteredPosts.length === 0 ? (
            <p
              className={`text-center py-12 ${darkMode ? "text-neutral-500" : "text-neutral-400"}`}
            >
              No posts found with this tag.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {filteredPosts.map((post) => (
                <Link
                  to={`/blogs/${post.slug}`}
                  key={post.id}
                  className="group block space-y-3"
                >
                  {/* Image Card */}
                  <div
                    className={`aspect-video rounded-xl overflow-hidden border ${
                      darkMode
                        ? "border-neutral-800 bg-neutral-900"
                        : "border-neutral-200 bg-neutral-100"
                    }`}
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags?.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className={`px-2 py-0.5 text-[10px] font-medium rounded-full ${
                            darkMode
                              ? "bg-neutral-800 text-neutral-400"
                              : "bg-neutral-200 text-neutral-600"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3
                      className={`font-bold text-lg leading-tight group-hover:underline decoration-2 underline-offset-4 ${
                        darkMode ? "text-neutral-100" : "text-neutral-900"
                      }`}
                    >
                      {post.title}
                    </h3>
                    <p
                      className={`text-sm line-clamp-2 ${
                        darkMode ? "text-neutral-400" : "text-neutral-600"
                      }`}
                    >
                      {post.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Blogs;
