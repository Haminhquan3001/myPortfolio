import styles from "./Hero.module.css";
import heroImage from "../../assets/profile.jpg";
import sun from "../../assets/sun.png";
import React, { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import moon from "../../assets/moon.png";
import linkedinLight from "../../assets/linkedinLight.png";
import linkedinDark from "../../assets/linkedinDark.png";
import githubLight from "../../assets/githubLight.png";
import githubDark from "../../assets/githubDark.png";
import CV from "../../assets/myresume.pdf";
import { useTheme } from "../../Theme/Theme";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const [letterClass, setLetterClass] = useState("text-animate");
  const jobArr = [
    "S",
    "o",
    "f",
    "t",
    "w",
    "a",
    "r",
    "e",
    " ",
    "e",
    "n",
    "g",
    "i",
    "n",
    "e",
    "e",
    "r",
  ];

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 3000);
  }, []);
  const themeIcon = theme === "light" ? sun : moon;
  const gitIcon = theme === "light" ? githubLight : githubDark;
  const linkedInIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.profile}
          src={heroImage}
          alt="Profile Picture"
        ></img>
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        ></img>
      </div>
      <div className={styles.info}>
        <h1>
          Quan Ha<br></br>
        </h1>
        <h2>(Chris)</h2>
        <h2>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArr}
            idx={15}
          ></AnimatedLetters>
        </h2>
        <span className={styles.myInfo}>
          {/*LinkedIn */}
          <a
            href="https://www.linkedin.com/in/quan-ha-48399b243/"
            target="_blank"
          >
            <img src={linkedInIcon} alt="LinkedIn icon"></img>
          </a>
          {/* Github */}
          <a href="https://github.com/Haminhquan3001" target="_blank">
            <img src={gitIcon} alt="Github icon"></img>
          </a>
        </span>
        <p className={styles.description}>
          Welcome to my website! I'm Quan Ha (Chris), a recent graduate and
          enthusiastic software engineer with a deep passion for technology.
          Explore my projects and learn more about my journey and the innovative
          solutions I've created.
        </p>
        <a href={CV} download>
          <button className="hover" download>
            My Resume
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
