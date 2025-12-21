import React from "react";

const BackgroundPattern = ({ theme }) => {
  return (
    <div
      className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none"
      style={{
        backgroundImage: theme.pattern,
        backgroundSize: "24px 24px",
      }}
    ></div>
  );
};

export default BackgroundPattern;

