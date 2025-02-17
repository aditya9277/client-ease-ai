import { useState, useEffect } from "react";
import axios from "axios";

const phoneNumber = "917725069277"; // 🔥 REPLACE with dynamic user input later

const fetchTranscript = async () => {
  try {
    const response = await axios.get(
      `http://localhost:5000/logs/transcript/${phoneNumber}`
    );
    return response.data; // ✅ Returns the latest transcript text
  } catch (error) {
    console.error("Failed to fetch transcript:", error);
    return "No transcript available";
  }
};

const TranscriptDisplay = () => {
  const [transcript, setTranscript] = useState("");

  useEffect(() => {
    const interval = setInterval(async () => {
      const data = await fetchTranscript();
      setTranscript(data);
    }, 3000); // ✅ Fetch transcript every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Live Transcript</h2>
      <pre>{transcript}</pre>
    </div>
  );
};

export default TranscriptDisplay;
