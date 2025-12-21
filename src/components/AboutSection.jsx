import React from "react";

const AboutSection = ({ theme, darkMode }) => {
  return (
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
  );
};

export default AboutSection;

