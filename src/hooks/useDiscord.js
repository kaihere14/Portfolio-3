import { useState,useEffect } from "react";
import axios from "axios";

export const checkStatus =()=>{
    const DISCORD_API_URL = "https://api.lanyard.rest/v1/users/1212050219538325516";
    const [discord,setStatus] = useState(null);

useEffect(() => {
    const fetchDiscordStatus = async () => {
        try {
            const response = await axios.get(DISCORD_API_URL);
            setStatus(response.data);
        } catch (error) {
            console.error("Error fetching Discord status:", error);
        }
    }
        fetchDiscordStatus();
        const interval = setInterval(fetchDiscordStatus, 10000);
        return () => clearInterval(interval);
},[]);
return {discord};
}



