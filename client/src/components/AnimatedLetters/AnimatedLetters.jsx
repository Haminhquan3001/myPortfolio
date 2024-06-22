import "./AnimatedLetter.css";
import { useEffect } from "react";

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  useEffect(() => {
    const styleSheet = document.styleSheets[3];
    for (let i = 1; i <= 50; i++) {
      const rule = `.text-animate._${i} { animation-delay: ${i / 12}s; }`;
      styleSheet.insertRule(rule, styleSheet.cssRules.length);
    }
  }, []);

  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
