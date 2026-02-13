import { useEffect, useState } from "react";
import "./CyberLoader.css";

const messages = [
  "Initializing Neural Network...",
  "Connecting Satellites...",
  "Scanning Threat Vectors...",
  "Decrypting Channels...",
  "Tracking Dark Signals...",
  "Loading Cyber Modules...",
  "System Armed."
];

export default function CyberLoader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [log, setLog] = useState(messages[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(timer);
          setTimeout(onFinish, 800);
          return 100;
        }
        return p + 2;
      });

      setLog(messages[Math.floor(Math.random() * messages.length)]);
    }, 80);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="cyber-loader">
      <div className="terminal">
        <p>{log}</p>
        <div className="bar">
          <div style={{ width: `${progress}%` }} />
        </div>
        <span>{progress}%</span>
      </div>
    </div>
  );
}
