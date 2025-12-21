import React from "react";

const CursorEffect = ({ mousePosition, darkMode }) => {
  return (
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
  );
};

export default CursorEffect;

