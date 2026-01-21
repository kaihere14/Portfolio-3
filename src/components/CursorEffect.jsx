import React, { useEffect, useRef } from "react";

const CursorEffect = ({ darkMode }) => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e) => {
      cursor.style.left = `${e.clientX - 192}px`;
      cursor.style.top = `${e.clientY - 192}px`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed w-96 h-96 rounded-full pointer-events-none z-50 opacity-20 blur-3xl transition-opacity duration-500 ease-out ${darkMode ? "opacity-20" : "opacity-0"
        }`}
      style={{
        background:
          "radial-gradient(circle, rgba(251,146,60,0.15) 0%, transparent 70%)",
        left: "-9999px",
        top: "-9999px",
      }}
    />
  );
};

export default CursorEffect;

