import { useState, useEffect } from "react";
import axios from "axios";

export const useSpotify = () => {
  const [spotify, setSpotify] = useState(null);
  const [spotifyLoaded, setSpotifyLoaded] = useState(false);

  useEffect(() => {
    const fetchSpotify = async () => {
      try {
        const spotifyResponse = await axios.get(
          "https://portfolio-3-backend.vercel.app/api/spotify/playback"
        );
        setSpotify(spotifyResponse.data);
        setSpotifyLoaded(true);
      } catch (error) {
        setSpotifyLoaded(true); // Even on error, stop loading
      }
    };
    fetchSpotify();
    const interval = setInterval(fetchSpotify, 5000);
    return () => clearInterval(interval);
  }, []);

  return { spotify, spotifyLoaded };
};

