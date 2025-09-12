import { useState, useEffect } from "react";
import "./Name.css";

export default function MorseToName() {
  const morseCode = "... .--. .- -. -.. .- -. / ... .... .- ....";
  const name = "Spandan Shah";

  const [displayText, setDisplayText] = useState(morseCode);
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowName(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showName) {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayText(name.slice(0, i + 1) + morseCode.slice(i + 1));
        i++;
        if (i === name.length) clearInterval(interval);
      }, 150);
      return () => clearInterval(interval);
    }
  }, [showName]);

  return (
    <div className="container">
      <div className="morse-text">{displayText}</div>
    </div>
  );
}
