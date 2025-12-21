import React from "react";
import { FileText, Send, MapPin, Clock, Code } from "lucide-react";
import { stats } from "../data/portfolioData";

const Header = ({ theme, darkMode, time }) => {
  return (
    <header className="space-y-8">
      <div className="flex items-start justify-between">
        <div className="space-y-3">
          <div
            className={`h-16 w-16 ${theme.cardBg} rounded-2xl border ${theme.cardBorder} mb-6 flex items-center justify-center overflow-hidden relative group cursor-pointer`}
          >
            <div className="absolute inset-0 bg-linear-to-tr from-orange-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="absolute inset-0 bg-linear-to-br from-orange-400/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
            <img
              src="https://res.cloudinary.com/dw87upoot/image/upload/v1763497871/Gemini_Generated_Image_2_Background_Removed_tkozqp.png"
              alt="Logo"
              className="w-16 h-16 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <h1
            className={`text-5xl font-bold tracking-tight bg-linear-to-r ${theme.gradientText} bg-clip-text text-transparent`}
          >
            Arman Thakur
          </h1>
          <p
            className={`text-lg ${theme.textMuted} leading-relaxed text-gray-400 py-2 px-1 space-y-2`}
          >
            I build modern, interactive web applications using{" "}
            <span
              className={`${
                darkMode
                  ? "bg-white/15 text-white border-white/45"
                  : "bg-black/10 text-black border-black/40"
              } text-[12px] font-bold border-2 border-dashed rounded-md px-2 py-1 inline-flex items-center gap-2 mx-1 my-1`}
            >
              <svg viewBox="0 0 128 128" className="w-4 h-4">
                <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path>
                <path
                  fill="#007acc"
                  d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
                ></path>
              </svg>
              TypeScript
            </span>
            ,{" "}
            <span
              className={`${
                darkMode
                  ? "bg-white/15 text-white border-white/45"
                  : "bg-black/10 text-black border-black/40"
              } text-sm font-bold border-2 border-dashed rounded-md px-2 py-1 inline-flex items-center gap-2 mx-1 my-1`}
            >
              <span className="size-4 shrink-0 inline-flex">
                <svg viewBox="0 0 128 128">
                  <g fill="#61DAFB">
                    <circle cx="64" cy="64" r="11.4"></circle>
                    <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
                  </g>
                </svg>
              </span>
              React
            </span>
            ,{" "}
            <span
              className={`${
                darkMode
                  ? "bg-white/15 text-white border-white/45"
                  : "bg-black/10 text-black border-black/40"
              } text-sm font-bold border-2 border-dashed rounded-md px-2 py-1 inline-flex items-center gap-2 mx-1 my-1`}
            >
              <span className="size-4 shrink-0 inline-flex">
                <svg viewBox="0 0 128 128">
                  <circle cx="64" cy="64" r="64"></circle>
                  <path
                    fill="url(#a)"
                    d="M106.317 112.014 49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64.216 64.216 0 0 0 6.763-5.209z"
                  ></path>
                  <path
                    fill="url(#b)"
                    d="M81.778 38.4h8.533v51.2h-8.533z"
                  ></path>
                  <defs>
                    <linearGradient
                      id="a"
                      x1="109"
                      x2="144.5"
                      y1="116.5"
                      y2="160.5"
                      gradientTransform="scale(.71111)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff"></stop>
                      <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                    </linearGradient>
                    <linearGradient
                      id="b"
                      x1="121"
                      x2="120.799"
                      y1="54"
                      y2="106.875"
                      gradientTransform="scale(.71111)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff"></stop>
                      <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              Next.js
            </span>
            ,{" "}
            <span
              className={`${
                darkMode
                  ? "bg-white/15 text-white border-white/45"
                  : "bg-black/10 text-black border-black/40"
              } text-sm font-bold border-2 border-dashed rounded-md px-2 py-1 inline-flex items-center gap-2 mx-1 my-1`}
            >
              <img
                src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
                alt="Node.js"
                className="w-4 h-4"
              />
              Node.js
            </span>
            , and{" "}
            <span
              className={`${
                darkMode
                  ? "bg-white/15 text-white border-white/45"
                  : "bg-black/10 text-black border-black/40"
              } text-sm font-bold border-2 border-dashed rounded-md pl-1 pr-2 py-1 inline-flex items-center gap-1 mx-1 my-1`}
            >
              <img
                src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
                alt="MongoDB"
                className="w-4 h-4"
              />
              MongoDB
            </span>
            , with a strong emphasis on clean UI,{" "}
            <span
              className={`${
                darkMode ? "text-white" : "text-black"
              } font-medium`}
            >
              Performance
            </span>
            , and{" "}
            <span
              className={`${
                darkMode ? "text-white" : "text-black"
              } font-medium`}
            >
              User Experience
            </span>
          </p>
        </div>
      </div>

      {/* Add buttons below the hero header */}
      <div className="flex gap-4 mt-6">
        <a
          href="https://drive.google.com/file/d/1MiYa338p-Kd1vRRG6Aqa3G5FNEpI79Hb/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-neutral-900 text-sm text-white hover:bg-neutral-800 transition-all duration-300 border border-neutral-700"
        >
          <FileText size={16} /> Resume / CV
        </a>
        <a
          href="mailto:armanthakur200814@gmail.com"
          className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-neutral-100 text-sm text-black hover:bg-neutral-200 transition-all duration-300 border border-neutral-300"
        >
          <Send size={16} /> Get in touch
        </a>
      </div>

      <div className="mt-8 flex gap-2 opacity-60 font-bold">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary flex items-center gap-2"
          data-state="closed"
          data-slot="tooltip-trigger"
          href="https://x.com/armankiyotaka?s=21"
        >
          <span className="size-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path>
            </svg>
          </span>
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary flex items-center gap-2"
          data-state="closed"
          data-slot="tooltip-trigger"
          href="https://www.linkedin.com/in/arman-thakur-303b47367/"
        >
          <span className="size-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
            </svg>
          </span>
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary flex items-center gap-2"
          data-state="closed"
          data-slot="tooltip-trigger"
          href="https://github.com/kaihere14"
        >
          <span className="size-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
            </svg>
          </span>
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary flex items-center gap-2"
          data-state="closed"
          data-slot="tooltip-trigger"
          href="https://www.instagram.com/_mirenox/"
        >
          <span className="size-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
            </svg>
          </span>
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary flex items-center gap-2"
          data-state="closed"
          data-slot="tooltip-trigger"
          href="https://in.pinterest.com/armanthakur200814/"
        >
          <span className="size-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M224,112c0,22.57-7.9,43.2-22.23,58.11C188.39,184,170.25,192,152,192c-17.88,0-29.82-5.86-37.43-12l-10.78,45.82A8,8,0,0,1,96,232a8.24,8.24,0,0,1-1.84-.21,8,8,0,0,1-6-9.62l32-136a8,8,0,0,1,15.58,3.66l-16.9,71.8C122,166,131.3,176,152,176c27.53,0,56-23.94,56-64A72,72,0,1,0,73.63,148a8,8,0,0,1-13.85,8A88,88,0,1,1,224,112Z"></path>
            </svg>
          </span>
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary flex items-center gap-2"
          data-state="closed"
          data-slot="tooltip-trigger"
          href="mailto:armanthakur200814@gmail.com"
        >
          <span className="size-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path>
            </svg>
          </span>
        </a>
      </div>

      {/* STATS ROW */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {stats.map((stat, idx) => {
          const StatIcon = stat.icon;
          return (
            <div
              key={stat.label}
              className={`${theme.cardBg} border ${theme.cardBorder} rounded-xl p-4 hover:${theme.cardHoverBg} hover:${theme.cardHoverBorder} transition-all duration-300 group cursor-default`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <StatIcon
                size={18}
                className={`${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}
              />
              <div
                className={`text-2xl font-bold ${theme.textWhite} mb-1 group-hover:text-orange-400 transition-colors`}
              >
                {stat.value}
              </div>
              <div className={`text-xs ${theme.textSubtle}`}>{stat.label}</div>
            </div>
          );
        })}
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
            })}{" "}
            IST
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
  );
};

export default Header;
