import { useState, useEffect } from "react";

const TypingEffect = ({ text = "", speed = 50, className }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      // Vérifier si on est encore dans la limite de la chaîne
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <h1 className={className}>{displayedText}</h1>;
};

export default TypingEffect;
