import { useEffect, useState } from "react";
import axios from "axios";

export default function useGithubCommits() {
  const [commits, setCommits] = useState(null);

  useEffect(() => {
    let mounted = true;

    async function fetchCommits() {
      try {
        const token = import.meta.env.VITE_GITHUB_PAT || null;
        if (!token) {
          // no token available in env
          if (mounted) setCommits(null);
          return;
        }

        const res = await axios.post(
          "https://api.github.com/graphql",
          {
            query: `query { user(login: "kaihere14") { contributionsCollection { totalCommitContributions } } }`,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const total =
          res?.data?.data?.user?.contributionsCollection
            ?.totalCommitContributions;

        if (mounted) setCommits(total != null ? String(total) : null);
      } catch (err) {
        console.error("GitHub fetch failed:", err);
        if (mounted) setCommits(null);
      }
    }

    // initial fetch (single call)
    fetchCommits();

    return () => {
      mounted = false;
    };
  }, []);

  return { gitValue: commits };
}
