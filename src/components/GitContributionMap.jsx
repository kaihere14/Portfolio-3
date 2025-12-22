import { GitHubCalendar } from "react-github-calendar";
import useGithubCommits from "../hooks/useGithubCommits";
import { checkStatus } from "../hooks/useDiscord";

const GitContributionMap = ({ theme, darkMode }) => {
  const { gitValue } = useGithubCommits();
  const { discord } = checkStatus();

  const activities = discord?.data?.activities || [];
  const vscodeActivity = activities.find(
    (activity) =>
      activity.name === "Visual Studio Code" ||
      activity.application_id === "383226320970055681"
  );

  const formatElapsedTime = (startTimestamp) => {
    if (!startTimestamp) return null;
    const elapsed = Date.now() - startTimestamp;
    const minutes = Math.floor(elapsed / 60000);
    const seconds = Math.floor((elapsed % 60000) / 1000);

    if (minutes < 60) return `${minutes}m ${seconds}s`;
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <p
        className={`${theme.textSubtle} text-sm font-medium mb-3 ml-1 uppercase tracking-wider`}
      >
        Featured
      </p>

      <div
        className={`${theme.cardBg} backdrop-blur-md rounded-2xl p-6 md:p-10 ${theme.cardBorder} border shadow-2xl`}
      >
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <div className="space-y-1">
            <h2
              className={`text-4xl font-bold ${theme.textWhite} tracking-tight`}
            >
              GitHub Activity
            </h2>
            <p className={`${theme.textMuted} text-lg`}>
              Total:{" "}
              <span className="text-emerald-400 font-mono font-semibold">
                {gitValue || "1,987"}
              </span>{" "}
              contributions
            </p>
          </div>

          {/* Discord activity status */}
          {vscodeActivity && (
            <div className="text-left md:text-right border-l-2 md:border-l-0 md:border-r-2 border-emerald-500/50 px-4 md:px-0 md:pr-4">
              <p
                className={`${theme.text} text-sm font-medium flex items-center md:justify-end gap-2 mb-1`}
              >
                Currently coding in{" "}
                <span className={theme.textWhite}>VsCode</span>
                <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              </p>
              <p className={`${theme.textMuted} text-xs leading-relaxed`}>
                {formatElapsedTime(vscodeActivity.timestamps?.start)} elapsed •{" "}
                <span className={`${theme.text} italic`}>
                  {vscodeActivity.details || "Editing files"}
                </span>
              </p>
            </div>
          )}
        </div>

        {/* GitHub Calendar Container */}
        <div className="flex justify-center items-center overflow-hidden w-full pt-4">
          <div className="overflow-x-auto w-full  flex justify-center custom-scrollbar">
            <GitHubCalendar
              username="kaihere14"
              colorScheme={darkMode ? "dark" : "light"}
              blockSize={7}
              blockMargin={4}
              fontSize={14}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitContributionMap;
