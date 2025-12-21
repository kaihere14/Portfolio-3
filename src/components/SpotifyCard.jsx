import React from "react";

const SpotifyCard = ({ spotify, spotifyLoaded, theme, darkMode }) => {
  return (
    <div className="mt-4 w-full flex justify-center">
      <div
        className={`flex items-center ${theme.cardBg} border ${theme.cardBorder} rounded-2xl p-3 gap-3 shadow-md w-full max-w-3xl relative backdrop-blur-md min-h-14`}
      >
        {!spotifyLoaded ? (
          // Skeleton loader
          <>
            <div className="w-10 h-10 rounded-lg bg-neutral-700/30 animate-pulse" />
            <div className="flex-1 min-w-0 space-y-1">
              <div className="flex items-center gap-1 mb-0.5">
                <div className="w-3 h-3 rounded bg-neutral-700/30 animate-pulse" />
                <div className="h-2 w-16 rounded bg-neutral-700/30 animate-pulse" />
              </div>
              <div className="h-3 w-24 rounded bg-neutral-700/30 animate-pulse" />
              <div className="h-2 w-16 rounded bg-neutral-700/30 animate-pulse" />
            </div>
            <div className="ml-2 w-7 h-7 rounded-lg bg-neutral-700/30 animate-pulse" />
          </>
        ) : (
          spotify && (
            <>
              <img
                src={spotify.albumArt}
                alt={spotify.name}
                className="w-10 h-10 rounded-lg object-cover shadow"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 mb-0.5">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
                    alt="Spotify"
                    className={`w-3 h-3 ${
                      spotify.isPlaying ? "animate-pulse" : ""
                    }`}
                    style={{ filter: "brightness(1.2)" }}
                  />
                  <span
                    className={`text-[10px] font-medium ${theme.textMuted}`}
                  >
                    {spotify.isPlaying ? "Now playing" : "Last played"}
                  </span>
                </div>
                <div
                  className={`text-xs font-bold ${theme.textWhite} leading-tight truncate`}
                >
                  {spotify.name}
                </div>
                <div className={`text-[10px] ${theme.textMuted} truncate`}>
                  by {spotify.artists}
                </div>
              </div>
              <a
                href={spotify.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`ml-2 flex items-center justify-center w-7 h-7 rounded-lg ${theme.cardBg} hover:${theme.cardHoverBg} transition-colors border ${theme.cardBorder} group backdrop-blur-sm`}
              >
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  stroke={darkMode ? "white" : "black"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </a>
            </>
          )
        )}
      </div>
    </div>
  );
};

export default SpotifyCard;

